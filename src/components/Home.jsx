import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs, fetchJobsSuccess } from '../actions/jobs';
import Filters from './Filters';
import JobDetails from './JobDetails';

function Home() {
  const dispatch = useDispatch()
  const jobs = useSelector(state => state.jobs?.jdList);
  const [count, setCount] = useState([])
  const [page, setPage] = useState(0)
  const [desc, setDisc] = useState({})
  const [role, setRoles] = useState({
    jobRole: "",
    numberOfEmployees: "",
    minExp: "",
    minJdSalary: "",
    userSearch: ""
  })

  const handleInfiniteScroll = () => {
    try {
      if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
        setPage((prevPage) => prevPage + 1)
      }
    } catch (err) {
      console.log(err);
    }
  }

  console.log(count)


  useEffect(() => {
    dispatch(fetchJobs(page));
  }, [page])

  useEffect(() => {
    const filteredCount = jobs?.filter((item) => {
      const minExpCondition = !role.minExp || item.minExp === role.minExp;
      const jobRoleCondition = !role.jobRole || item.jobRole === role.jobRole;
      const salaryCondition = !role.minJdSalary || item.minJdSalary === role.minJdSalary;
      return minExpCondition && jobRoleCondition && salaryCondition;
    });
    if (Array.isArray(filteredCount)) {
      setCount((prev) => [...prev, ...filteredCount]);
    }
  }, [jobs])

  useEffect(() => {
    dispatch(fetchJobsSuccess(page))
    window.addEventListener("scroll", handleInfiniteScroll)
  }, [])

  const handleChange = (e, filters) => {
    let obj = {}
    switch (filters) {
      case "experince":
        obj = { ...role, minExp: e }
        break;
      case "JobRole":
        obj = { ...role, jobRole: e }
        break;
      case "Salary":
        obj = { ...role, minJdSalary: e }
        break;
      case "userSearch":
        obj = { ...role, userSearch: e.target.value }
        break;
    }
    setRoles({
      ...obj
    });
    const filteredCount = count?.filter((item) => {
      const minExpCondition = !obj.minExp || item.minExp === obj.minExp;
      const jobRoleCondition = !obj.jobRole || item.jobRole === obj.jobRole;
      const salaryCondition = !obj.minJdSalary || item.minJdSalary === obj.minJdSalary;
      const searchByuser = !obj.userSearch || item?.jobRole?.includes(obj?.userSearch) || item?.companyName?.includes(obj?.userSearch);
      return minExpCondition && jobRoleCondition && salaryCondition && searchByuser;
    });
    setCount(filteredCount)
  };
  const handleRemove = () => {
    setRoles({
      jobRole: "",
      numberOfEmployees: "",
      minExp: "",
      userSearch: ""
    })
    setCount(jobs)
  }

  const handleDisc = (e, ind) => {
    setDisc({ [ind]: !desc[ind] })
  }

  return (
    <>
      <Filters count={count} role={role} handleChange={handleChange} handleRemove={handleRemove} />
      <JobDetails count={count} desc={desc} handleDisc={handleDisc} />
    </>
  )
}

export default Home