// // var opn = require('opn');

// // opens the url in the default browser
// // opn('https://nyr48864.live.dynatrace.com/#dashboard;gtf=2021-11-24T11:00:00-03:00%20to%202021-11-24T12:00:00-03:00;gf=all;id=380d3d28-0861-444b-88e9-f978a15640fc');

// // specify the app to open in
// // opn('http://sindresorhus.com', { app: 'firefox' });

// const request = require('request-promise');
// const cheerio = require('cheerio');

// const linkGeral = 'https://nyr48864.live.dynatrace.com/#dashboard;gtf=2021-11-24T11:00:00-03:00%20to%202021-11-24T11:10:00-03:00;gf=all;id=380d3d28-0861-444b-88e9-f978a15640fc';
// const link = 'https://nyr48864.live.dynatrace.com/ui/data-explorer?dashboardId=380d3d28-0861-444b-88e9-f978a15640fc&tileId=13&referer=DASHBOARD&gf=-195745139220334846&gtf=2021-11-24T11:00:00-03:00%20to%202021-11-24T12:00:00-03:00';
// const primeiro = 'https://www.bullion-rates.com/gold/INR/2007-1-history.htm';

// request(link, (error, response, html) => {
//   if (!error && response.statusCode == 200) {
//     const $ = cheerio.load(html);

//     // const datarow = $(".HeaderRow");
//     // const output = datarow.find("th").text();
//     console.log('&', $.html());
//     const datarow = $('span').text();
//     // const output = datarow.find("span").text();

//     console.log('datarow', datarow);
//     // console.log('output', output);


//     // $(".DataRow").each((i, data) => {
//     //   const item = $(data).text();
//     //   const item1 = $(data).text();
//     //   const item2 = $(data).text();

//     //   console.log(item, item1, item2);
//     // })
//   }
// })

const puppeteer = require('puppeteer');

// const vgmUrl = 'https://www.vgmusic.com/music/console/nintendo/nes';
const vgmUrl = 'https://nyr48864.live.dynatrace.com/#dashboard;gtf=2021-11-24T14:00:00-03:00%20to%202021-11-24T15:00:00-03:00;gf=all;id=380d3d28-0861-444b-88e9-f978a15640fc';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(vgmUrl);
  // console.log('page', page);

  const links = await page.$eval('div', elements => console.log('elements', elements));

  links.forEach(link => console.log(link));

  await browser.close();
})();
