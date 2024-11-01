const puppeteer = require('puppeteer')
import { Browser } from 'puppeteer'
const url = 'https://www.codesprint.ninja/'

const main = async()=>{
    const browser:Browser = await puppeteer.launch()
    
}

main()