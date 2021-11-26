const { Builder, Options, By, WebElement } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

// const siteDyna = 'https://nyr48864.live.dynatrace.com/#dashboard;gtf=2021-11-25T13:00:00-03:00%20to%202021-11-25T14:00:00-03:00;gf=all;id=380d3d28-0861-444b-88e9-f978a15640fc';
const siteDyna = 'https://nyr48864.live.dynatrace.com/#dashboard;gtf=2021-11-26T06:00:00-03:00%20to%202021-11-26T07:00:00-03:00;gf=all;id=380d3d28-0861-444b-88e9-f978a15640fc';
const loginDyna = 'caio.oliveira-ext@viavarejo.com.br';
const login = 'C:/Users/Caio/AppData/Local/Google/Chrome/User Data/Profile 2';

const throughput = 'dxb-m';
const responseError = 'dSc-k';
(async function myFunction() {

  // options = new Options();
  // options.addArguments(`user-data-dir=C:/Users/Caio/AppData/Local/Google/Chrome/User Data/Profile 2`);
  let opts = new chrome.Options();
  opts.addArguments('user-data-dir=C:/Users/Caio/AppData/Local/Google/Chrome/User Data/Profile 2');
  // opts.addArguments('profile-directory= Jorge');

  // console.log('opts', opts);

  let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(opts)
    .build();

  await driver.get(siteDyna);


  setTimeout(async () => {
    let listaThroughput = new Array(10);
    let listaMsFinal = new Array(10);
    let listaErro400 = new Array(10);
    let listaErro500 = new Array(10);
    let listaCPU = new Array(10);
    let listaMemoria = new Array(10);

    let listaMs = [];
    let listaPorcentagem = [];

    let lista = await driver.findElements(By.className(throughput));

    // A lista2 traz os erros 400 e 500, response time, CPU e memória
    let lista2 = await driver.findElements(By.className(responseError));

    for (let i = 0; i < lista2.length; i++) {
      let item = await lista2[i].getText();

      if (item.search('mCores') !== -1 || item.search('Cores') !== -1) {
        continue;
      }

      if (item.search('ms') !== -1) {
        listaMs.push(item.replace('.', ','));
      }

      if (item.search('%') !== -1) {
        listaPorcentagem.push(item.replace('.', ','));
      }
    }

    for (let i = 0; i < lista.length; i++) {
      let formatado = formatarThroughput(await lista[i].getText());

      if (i === 3) {
        listaThroughput[6] = formatado;
        listaMsFinal[6] = listaMs[i].replace('ms', '');
      } else if (i === 4) {
        listaThroughput[7] = formatado;
        listaMsFinal[7] = listaMs[i].replace('ms', '');
      } else if (i === 5) {
        listaThroughput[8] = formatado;
        listaMsFinal[8] = listaMs[i].replace('ms', '');
      } else if (i === 6) {
        listaThroughput[3] = formatado;
        listaMsFinal[3] = listaMs[i].replace('ms', '');
      } else if (i === 7) {
        listaThroughput[4] = formatado;
        listaMsFinal[4] = listaMs[i].replace('ms', '');
      } else if (i === 8) {
        listaThroughput[5] = formatado;
        listaMsFinal[5] = listaMs[i].replace('ms', '');
      } else {
        listaThroughput[i] = formatado;
        listaMsFinal[i] = listaMs[i].replace('ms', '');
      }
    }

    listaErro400[0] = listaPorcentagem[0];
    listaErro500[0] = listaPorcentagem[1];
    listaCPU[0] = listaPorcentagem[6];
    listaMemoria[0] = listaPorcentagem[7];

    listaErro400[1] = listaPorcentagem[2];
    listaErro500[1] = listaPorcentagem[3];
    listaCPU[1] = listaPorcentagem[8];
    listaMemoria[1] = listaPorcentagem[9];

    listaErro400[2] = listaPorcentagem[4];
    listaErro500[2] = listaPorcentagem[5];
    listaCPU[2] = listaPorcentagem[10];
    listaMemoria[2] = listaPorcentagem[11];

    listaErro400[3] = listaPorcentagem[25];
    listaErro500[3] = listaPorcentagem[26];
    listaCPU[3] = listaPorcentagem[24];
    listaMemoria[3] = listaPorcentagem[22];

    listaErro400[4] = listaPorcentagem[30];
    listaErro500[4] = listaPorcentagem[29];
    listaCPU[4] = listaPorcentagem[28];
    listaMemoria[4] = listaPorcentagem[27];

    listaErro400[5] = listaPorcentagem[35];
    listaErro500[5] = listaPorcentagem[34];
    listaCPU[5] = listaPorcentagem[33];
    listaMemoria[5] = listaPorcentagem[32];

    listaErro400[6] = listaPorcentagem[14];
    listaErro500[6] = listaPorcentagem[13];
    listaCPU[6] = listaPorcentagem[12];
    listaMemoria[6] = listaPorcentagem[23];

    listaErro400[7] = listaPorcentagem[31];
    listaErro500[7] = listaPorcentagem[17];
    listaCPU[7] = listaPorcentagem[16];
    listaMemoria[7] = listaPorcentagem[15];

    listaErro400[8] = listaPorcentagem[21];
    listaErro500[8] = listaPorcentagem[20];
    listaCPU[8] = listaPorcentagem[19];
    listaMemoria[8] = listaPorcentagem[18];

    listaErro400[9] = listaPorcentagem[36];
    listaErro500[9] = listaPorcentagem[37];
    listaCPU[9] = listaPorcentagem[38];
    listaMemoria[9] = listaPorcentagem[39];

    console.log('Throughput:', listaThroughput.length)
    console.log('Response:', listaMsFinal.length)
    console.log('erro 400:', listaErro400.length)
    console.log('erro 500:', listaErro500.length)
    console.log('CPU: ', listaCPU.length);
    console.log('Memória: ', listaMemoria.length);

    for (let i = 0; i < 10; i++) {
      console.log(listaThroughput[i], listaMsFinal[i], listaErro400[i], listaErro500[i], listaCPU[i], listaMemoria[i]);
    }

    let objetoJSON = {
      'throughput': listaThroughput,
      'response': listaMsFinal,
      'erro 400': listaErro400,
      'erro 500': listaErro500,
      'CPU': listaCPU,
      'Memoria': listaMemoria
    }

    console.log(objetoJSON);
  }, 60000);

  function formatarThroughput(valorThroughput) {
    if (valorThroughput.search('k /min') > 0) {
      valorThroughput = (parseFloat(valorThroughput.replace('k /min', '')) * 1000).toString().replace('.', ',');
    } else {
      valorThroughput = (parseFloat(valorThroughput.replace('/min', ''))).toString().replace('.', ',');
    }

    return valorThroughput;
  }

  // if (a) {
  //   await driver.findElement(By.id('email_verify')).sendKeys(loginDyna);
  //   await driver.findElement(By.id('next_button')).click();

  //   setTimeout(async () => {
  //     await driver.findElement(By.id('i0116')).sendKeys(loginDyna);
  //     await driver.findElement(By.id('idSIButton9')).click();
  //   }, 2000);

  //   setTimeout(async () => {
  //     await driver.findElement(By.id('i0118')).sendKeys('C@@ioo212121');
  //     await driver.findElement(By.id('idSIButton9')).click();
  //   }, 3000);

  //   setTimeout(async () => {
  //     await driver.findElement(By.id('idSIButton9')).click();
  //   }, 40000);
  // } else {
  //   console.log('bla');
  // }
})();
