import moment from "moment";
import { $, browser, by, element } from "protractor"


describe('calendar', ()=>{
    beforeEach(async()=>{
        await browser.get('https://letcode.in/forms');
        await browser.manage().timeouts().implicitlyWait(10000);
    });
    afterEach(async ()=>{
        await browser.sleep(3000);
    })

    // it ('Select tomorrow date', async ()=>{
    //     let tomo= moment().add(3, 'day').format('DD');
    //     await element(by.buttonText(tomo)).click();
    // });

    // it ('Select next week date', async()=>{
    //     let tomo= moment().add(6, 'day').format('DD');
    //     await element(by.buttonText(tomo)).click();
    // })
    xit('Select next month data', async ()=>{
        let nextMonth =moment().add(30,'day').format('DD MMM');
        console.log(nextMonth);
        let date =nextMonth.split(' ')[0]
        console.log(date);
        let month =nextMonth.split(' ')[1]
        console.log(month);
        await $('div.datepicker-nav-month').click();
        await element(by.xpath(`//div[text()='${month}']`)).click();
        await element(by.buttonText(date)).click();

    })
   xit('Select previous 20 days & next 10 days', async ()=>{
    let nextMonth =moment().add(-30,'day').format('DD MMM');
    console.log(nextMonth);
    let date =nextMonth.split(' ')[0]
    console.log(date);
    let month =nextMonth.split(' ')[1]
    console.log(month);
    await $('input.is-datetimepicker-range').click();
    await element(by.css("div[class='datepicker is-active'] div[class='datepicker-nav-month']")).click();
    await element.all(by.xpath(`//div[text()='${month}']`)).last().click();
    await element.all(by.buttonText(date)).last().click();

     nextMonth =moment().add(30,'day').format('DD MMM');
        console.log(nextMonth);
        date =nextMonth.split(' ')[0]
        console.log(date);
      month =nextMonth.split(' ')[1]
        console.log(month);
       // await $('input.is-datetimepicker-range').click();
       await element(by.css("div[class='datepicker is-active'] div[class='datepicker-nav-month']")).click();
        await element.all(by.xpath(`//div[text()='${month}']`)).last().click();
        await element.all(by.buttonText(date)).last().click();
    })
    it('Select next month data', async ()=>{

        await $("#Date").click(); 
        
        // let nextMonth =moment().add(30,'day').format('DD MMM');
        // console.log(nextMonth);
        // let date =nextMonth.split(' ')[0]
        // console.log(date);
        // let month =nextMonth.split(' ')[1]
        // console.log(month);
        // await $('div.datepicker-nav-month').click();
        // await element(by.xpath(`//div[text()='${month}']`)).click();
        // await element(by.buttonText(date)).click();

    })
})