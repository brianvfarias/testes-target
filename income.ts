interface invoicingInfo {
  state: string,
  income: number
}

const companyInvoicing = [
  { state: "SP", income: 67836.43 },
  { state: "RJ", income: 36678.66 },
  { state: "MG", income: 29229.88 },
  { state: "ES", income: 27165.48 },
  { state: "Outros", income: 19849.53 }
]

function percentageOfIncomePerState(invoicing: invoicingInfo[]) {
  let total = invoicing.reduce((acc, item) => {
    return acc = acc + item.income
  }, 0)

  let percentageInfo = invoicing.map((item) => {
    let percentage = (item.income * 100 / total).toFixed(2)
    return { ...item, percentage }
  })
  return percentageInfo

}

console.log(percentageOfIncomePerState(companyInvoicing))
