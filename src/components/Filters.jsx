import { Input, Select } from 'antd'
import React from 'react'

const Filters = ({count,role,handleChange,handleRemove}) => {
  return (
    <div className='filters_container'>
        <div className='header_container'>
          <Select
            options={Array.from(new Set(count?.map(ele => ele?.minExp))).sort((a, b) => a - b).filter(each => each).map(each => ({
              label: each,
              value: each,
            }
            ))
            }
            value={role?.minExp}
            placeholder="Select minExp"
            style={{ width: "10rem" }}
            listHeight={150}
            onChange={(e) => handleChange(e, "experince")}
          />
          <Select
            options={Array.from(new Set(count?.map(ele => ele?.jobRole))).sort((a, b) => a - b).filter(each => each).map(each => ({
              label: each.toUpperCase(),
              value: each,
            }
            ))
            }
            value={role?.jobRole}
            style={{ width: "10rem" }}
            placeholder="Select JobRole"
            listHeight={150}
            onChange={(e) => handleChange(e, "JobRole")}
          />
          <Select
            options={Array.from(new Set(count?.map(ele => ele?.minJdSalary))).sort((a, b) => a - b).filter(each => each).map(each => ({
              label: each,
              value: each,
            }
            ))
            }
            style={{ width: "10rem" }}
            value={role?.minJdSalary}
            placeholder="Select salary"
            listHeight={150}
            onChange={(e) => handleChange(e, "Salary")}
          />
          <Input placeholder='Search on Company Name and Job Role' type='text' value={role?.userSearch} onChange={(e) => handleChange(e, "userSearch")} style={{ width: "15rem" }} />
        </div>
        {Object.values(role).some(value => value !== "") && <button onClick={handleRemove}>Clear</button>}
      </div>
  )
}

export default Filters