import React, { useState } from 'react'
import MessagesActions from './actions'
import MessagesBoxs from './boxs'
import FrontPopUp from './popup'

import {
  RemainingMessages,
  FormControl
} from 'components/client/messages/types'

// dummy data
const messagesData: RemainingMessages = 100

function Messages() {
  // form control initial value
  const initialControls: FormControl = {
    actionType: '',
    formType: '',
    show: false
  }

  // form direction
  const [formDir, setFormDir] = useState<boolean>(true)

  // form control object
  const [showForm, SetShowForm] = useState<FormControl>(initialControls)

  // Show Message Form
  const showFormFun = (id: string, kind: string) => {
    SetShowForm({
      actionType: id,
      formType: kind,
      show: true
    })
  }

  // Hide Message Form
  const hideFormFun = () => {
    SetShowForm(initialControls)
  }

  // form direction Handler
  const changeDir = () => {
    setFormDir(!formDir)
  }

  return (
    <section className="relative xs:pb-24">
      <MessagesActions messagesNum={messagesData} />
      <MessagesBoxs onClickFun={showFormFun} formDir={changeDir} />
      <FrontPopUp onCancel={hideFormFun} {...showForm} formDir={formDir} />
    </section>
  )
}

export default Messages
