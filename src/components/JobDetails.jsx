import React from 'react'

const JobDetails = ({count,desc,handleDisc}) => {
    return (
        <>
            {Array.isArray(count) ? <div className='card_container'>
                {
                    count?.map((ele, ind) => (
                        <div key={ind} className='card-details'>
                            <div className='posted_day'>
                                <p>Posted by 10 days ago</p>
                            </div>
                            <div className='job_role'>
                                <img src={ele?.logoUrl} alt='company name' className='profile_name' />
                                <div>
                                    <p className='company_name'>{ele?.companyName}</p>
                                    <p className='jobRole'>{(ele?.jobRole)?.toUpperCase()}</p>
                                    <p>{ele?.location}</p>
                                </div>
                            </div>
                            <div>
                                <p className='est_salry'>Estimated Salary:{` $${ele?.minJdSalary ? ele?.minJdSalary : ""} - ${ele?.maxJdSalary && ele?.maxJdSalary} LPA`}</p>
                            </div>
                            <div>
                                <p className='abt_cmpny'>About Company</p>
                                <p className='about_us'>About us</p>
                                <div className='paragraph-container'>

                                    <p className={`${desc[ind] ? 'show1' : 'paragraph'}`}>{ele?.jobDetailsFromCompany}</p>
                                    {!desc[ind] ? <p className="show-more" onClick={(e) => handleDisc(e, ind)}>View job</p> : <p className="show-more" onClick={(e) => handleDisc(e, ind)}>less description</p>}
                                </div>
                            </div>
                            <div>
                                <p style={{ fontSize: "0.8rem" }}>Minimum Experience</p>
                                {ele?.minExp ? <p>{`${ele?.minExp} years`}</p> : <p> - </p>}
                                {/* <p>{ele?.minExp && <span>{ele?.minExp}</span>} - {ele?.maxExp &&<span>{ele?.maxExp} yrs</span>}</p> */}
                            </div>
                            <div className='btns_container'>
                                <button className='easy_apply'>Easy Apply</button>
                                <button className='referral'>Unlock Referrals asks</button>
                            </div>
                        </div>
                    ))
                }

            </div> : null}
        </>
    )
}

export default JobDetails