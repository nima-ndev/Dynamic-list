// __________________________________________________________________ VARIABLES
var table=document.querySelector('.table_contaner');
var table_box=document.querySelector('.table');
var ordered_list_box=document.querySelector('.ordered-list');
var ordered_list=document.querySelector('.ordered-list_text--other');
var ordered_list_best=document.querySelector('.ordered-list_text--best');
var total_average=document.querySelector('.total-average');


var number=["اول","دوم","سوم","چهارم","پنجم","ششم","هفتم","هشتم","نهم","دهم","یازدهم","دوازدهم","سیزدهم","چهاردهم","پانزدهم","شانزدهم","هفدهم","هجدهم","نوزدهم","بیستم","بیست و یکم","بیست و دوم","بیست و سوم","بیست و چهارم","بیست و پنجم","بیست و ششم","بیست و هفتم","بیست و هشتم","بیست و نهم","سی ام"]
var std=[];
var ordered_std=[];
var number_of_std=0;
// __________________________________________________________________ FUNCTIONS

function addStd(num1,num2,num3,i){//add an student's information
    var student={
        score1:num1,
        score2:num2,
        score3:num3,
        average: Number(((num1+num2+num3)/3).toFixed(2)),
        stdNum:i
    };
    std.push(student)
}
const quickSort = (arr) => {//sort the array by average
    if (arr.length <= 1) {
      return arr;
    }
  
    var pivot = arr[0].average;
    var leftArr = [];
    var rightArr = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].average < pivot) {
        leftArr.push(arr[i]);
      } else {
        rightArr.push(arr[i]);
      }
    }
  
    return [...quickSort(leftArr), arr[0], ...quickSort(rightArr)];
  };
// __________________________________________________________________ MAIN

//_____________________________________________ INPUT 
number_of_std=Number(prompt("enter the number of students"));//geting the scores of students
for(var i=1;i<=number_of_std;i++){  
    var current_std=[];
    for(var j=0;j<3;j++){
        current_std[j]=Number((Math.random()*20).toFixed(1));
    }
    addStd(current_std[0],current_std[1],current_std[2],i)
}

//_____________________________________________ OUTPUT 

for(var i=0;i<number_of_std;i++){//putting the elements in the table
    table.innerHTML+=`<div class="std"><span class="h-4">student ${i+1}:</span><span class="h-4">${std[i].score1}</span><span class="h-4">${std[i].score2}</span><span class="h-4">${std[i].score3}</span><span class="h-4 avg">${std[i].average}</span></div>`;
}

ordered_std=quickSort(std);//putting the elements in ordered list
var v=0;
for(var i=number_of_std-1;i>=number_of_std-3;i--){                   
  ordered_list_best.innerHTML+=`<P class="h-5--b">نفر ${number[v]} کلاس: دانش آموز شماره ${ordered_std[i].stdNum} میانگین: ${ordered_std[i].average}</P>`;
  v++;
}
var n=3;
for(var i=number_of_std-4;i>=0;i--){                   
    ordered_list.innerHTML+=`<P class="h-5">نفر ${number[n]} کلاس: دانش آموز شماره ${ordered_std[i].stdNum} میانگین: <span class="h-5 orang">${ordered_std[i].average}</span></P>`;
    n++;
}

var sum=0;//putting the average value
for(var i=0;i<number_of_std;i++){
    sum+=std[i].average;
}
total_average.innerHTML=`AVG: ${(sum/number_of_std).toFixed(2)}`;

// ____________________________________________ table show button
var std_of_table=document.querySelectorAll('.std');
var table_button=document.querySelector('.table_contaner--header');


table_button.addEventListener('click',()=>{
  if(std_of_table[1].style.display!='block'){
      table_box.style.animation= "menu-show 1s forwards";
      table_button.style.display="none";
      for(let i=0;i<number_of_std;i++){   
        std_of_table[i].style.display='flex';
        table.style.padding="2rem 0 4rem 0";
      } 
  }
});


