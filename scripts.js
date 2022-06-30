const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.25
const euro = 5.50
const bitcoin = 0.000010

convertValues = () => {
    const inputReal = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const valueConverted = document.getElementById('value-converted')

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
            }).format(inputReal * bitcoin)
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
    convertValues ()
}
button.addEventListener('click', convertValues)
select.addEventListener('change', chanceCurrency)