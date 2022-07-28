const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const convertValues = async () => {
    const inputReal = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const valueConverted = document.getElementById('value-converted')

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high

    realValueText.innerHTML = Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: "BRL",
    }
    ,).format(inputReal)

    if (select.value === "US$ Dólar Americano") {
        valueConverted.innerHTML = Intl.NumberFormat('en-US'
            , {
                style: "currency",
                currency: "USD",
            }).format(inputReal / dolar)
    }

    if (select.value === "€ Euro") {
        valueConverted.innerHTML = Intl.NumberFormat('de-DE'
            , {
                style: "currency",
                currency: "EUR",
            }).format(inputReal / euro)
    }
    if (select.value === "₿ Bitcoin") {
        valueConverted.innerHTML = Intl.NumberFormat('de-DE'
            , {
                style: "currency",
                currency: "BTC",
            }).format(inputReal / bitcoin)
    }
}

chanceCurrency = () => {

    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./img/logo-euro.png"
    }
    if (select.value === 'US$ Dólar Americano') {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./img/logo-eua.png"
    }
    if (select.value === '₿ Bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./img/logo-bitcoin.png"
    }
    convertValues()
}
button.addEventListener('click', convertValues)
select.addEventListener('change', chanceCurrency)
