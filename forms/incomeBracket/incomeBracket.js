
Submit.onclick=function(){
    if (Number(incomeInput.value) >= 99999) 
            taxOutput.value = (`With your income of $${incomeInput.value}, you are in the tax bracket of 25%`) 
    else if (Number(incomeInput.value) < 30000) 
            taxOutput.value = (`With your income of $${incomeInput.value}, you are in the tax bracket of 8%`)     
    else if (Number(incomeInput.value) < 99999) 
            taxOutput.value = (`With your income of $${incomeInput.value}, you are in the tax bracket of 15%`) 
}


goAgain.onclick=function(){
  incomeInput.value = ""
  taxOutput.value = ""
}

