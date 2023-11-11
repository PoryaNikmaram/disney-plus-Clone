/* eslint-disable react/prop-types */
import { useState } from 'react'
import styled from 'styled-components'

const AccordionWrapper = styled.div`
  padding: 0 1rem;
  width: 100%;
`

const AccordionItem = styled.div`
  margin-bottom: 10px;
  overflow: hidden;
`

const AccordionHeader = styled.div`
  padding: 10px;
  cursor: pointer;
  background-color: #080c18;
  padding: 28px;
`

const AccordionContent = styled.div`
  padding: 24px;
  font-size: 16px;
  line-height: 1.8;
  background-color: #101320;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  transition: height 0.3s ease;
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? '1000px' : '0')};
`

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null)

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <AccordionWrapper>
      {items?.map((item, index) => (
        <AccordionItem key={index}>
          <AccordionHeader onClick={() => handleItemClick(index)}>
            {item.title}
          </AccordionHeader>
          <AccordionContent isOpen={openIndex === index}>
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionWrapper>
  )
}

export default Accordion
