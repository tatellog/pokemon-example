import React, { useMemo } from 'react'
import { PageButton, PaginationWrapper } from './styles';
import { PaginationProps } from './type';

export const Pagination = ({currentPage, totalPages, onPageChange}: PaginationProps) => {

  const pageNumber = useMemo(() => {
    const numbers = [];
    for(let i = 1; i <= totalPages; i ++) {
      numbers.push(i)
    }
    return numbers

  }, [totalPages])

  const handleNextClick = () => {
    if(currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  const handlePrevClick = () => {
    if (currentPage > 1 ) {
      onPageChange(currentPage -1)
    }
   }
    return (
    <PaginationWrapper>
      <PageButton onClick={()=> handlePrevClick()} disabled={currentPage === 1}>
        Previous
      </PageButton>
      {
        pageNumber.map(page => 
        <PageButton 
          key={page} 
          onClick={() => onPageChange(page)} 
          disabled={currentPage === page}
          >{page}
        </PageButton> 
        )
      }
      <PageButton onClick={()=> handleNextClick()} disabled={currentPage === totalPages}>
        Next
      </PageButton>
    </PaginationWrapper>
  )
}
