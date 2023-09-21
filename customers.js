let myAccountBalance = parseInt(document.getElementById("myAmmount").innerText);

function sendMoney() {
    var enterName = document.getElementById("toname").value;
    var enterAmount = parseInt(document.getElementById("toammount").value);

    if (enterAmount > 8000) {
        alert("Insufficient Balance.")
    } else {
        var findUserBankAccount = enterName + "Balance";
        var myaccount = "AmruthaBalance";

        if (document.getElementById(findUserBankAccount) != null) {

            var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
            var myAccountBalance = parseInt(document.getElementById("myammount").innerText) - enterAmount;
            document.getElementById("myammount").innerText = myAccountBalance;
            document.getElementById(findUserBankAccount).innerHTML = finalAmount;
            document.getElementById(myaccount).innerHTML = myAccountBalance;
            window.alert(`Successful Transaction !!  
            ₹${enterAmount} is sent to ${enterName}@okjgbnk.com.`);
        }
        else {
            alert("User Not Found \n Add The User First");
        }
    }
}

function transaction_history() {
    var enterName = document.getElementById("toname").value;
    var enterAmount = parseInt(document.getElementById("toammount").value);
    window.alert(`₹${enterAmount} is sent to recepient with Email-id ${enterName}@gmail.com on ${Date()}.`);
}