let budget=document.querySelector('#input')
let Expense_name=document.querySelector('.expensename')
let Expense_amount=document.querySelector('.expenseamount')
let tittle=document.querySelector('.tittle')
let container2=document.querySelector('.container2')

let calculate=document.querySelector('.calc')
let adder=document.querySelector('.addx')

let span_of_budget=document.querySelector('.bm')
let span_of_expense=document.querySelector('.em')
let span_of_balance=document.querySelector('.balx')


let olderbalance
class Budget_managment{
    constructor(budget_amount,expense_amount,expensename){
        this.budget_amount=budget_amount;
        this.expense_amount=expense_amount
        this.expensename=expensename
    }

    myFun(){
        span_of_budget.textContent = this.budget_amount;
        span_of_balance.textContent=this.budget_amount
    }

    funofex(){
       
            span_of_expense.textContent=this.expense_amount
            const element=`<p class="expenselist">  <span class="myexpensename">-${this.expensename}</span> <span class="myexpense">${this.expense_amount}</span><label class="one"> <i class="fas fa-trash delete del" "></i><i class="fa-solid fa-pen-to-square edit"></i></label></p>`
            tittle.insertAdjacentHTML("afterend",element+"</br>")
            document.querySelector('.del')
            .addEventListener('click',e=>remov(e))

            document.querySelector('.edit')
            .addEventListener('click',e=>edit(e))
    }
    balnce(){
        olderbalance=span_of_balance.textContent
        let newbalance=olderbalance-this.expense_amount
        span_of_balance.textContent=newbalance
        
    }

}

remov=(e)=>{
e.target.parentNode.parentNode.remove()
}

edit=(e)=>{
    let parent=e.target.parentNode.parentNode
    let myspanofname=parent.firstElementChild
    let valuespan=e.target.parentNode.parentNode.querySelector('.myexpense')
    parent.remove()
    Expense_name.value=myspanofname.textContent
    Expense_amount.value=valuespan.textContent
}
calculate.addEventListener('click',(e)=>{
const budget_obj=new Budget_managment(budget.value,Expense_amount.value);
  budget_obj.myFun()
})

adder.addEventListener('click',()=>{
const budget_obj=new Budget_managment(budget.value,Expense_amount.value,Expense_name.value);
    budget_obj.funofex()
    budget_obj.balnce()
})
