import React from 'react'

import { SubsTableProps } from './types'
import useStyles from './styles'

const SubsTable: React.FC<SubsTableProps> = ({ arrayOfSubs }) => {
  const classes = useStyles()

  const generateSubsTableEntries = () => {
    const arrayOfTableEntries = arrayOfSubs.map((sub, index) => {
      return (
        <div
          className={
            index % 2 === 0
              ? classes.regularSubsTableEntry
              : classes.alternativeSubsTableEntry
          }
          key={`subsTableEntry${index}`}
        >
          <p>{sub.subName}</p>

          <p>{sub.subNextBillingDate}</p>
        </div>
      )
    })

    return arrayOfTableEntries
  }

  return (
    <div className={classes.subsTable}>
      <div className={classes.subsTableHeader}>
        <p>Subscription</p>

        <p>Next billing date</p>
      </div>

      {generateSubsTableEntries()}
    </div>
  )
}

export default SubsTable
