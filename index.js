// Code your solutions in this file
const invitees = ["Guadalupe", "Ollie", "Aki"];
                    function writeCards(invitees, event){
                        let message= []
                        for (let i = 0; i < invitees.length; i++){
                            message.push(`Thank you, ${invitees[i]}, for the wonderful ${event} gift!`);

                        }
                        return message
                    }
                    console.log(writeCards(invitees, "suprise"));



//invokes console.log once for each number, counting down from the number provided to zero

const nums = 10
function countDown (nums){
    for(let i = nums; i >= 0; i--){
        console.log(i);

    }
  
}
console.log(countDown(nums));


