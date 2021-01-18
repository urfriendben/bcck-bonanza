import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import puppeteer from 'puppeteer';

test('desktop render matches', async () => {
  const browser = await puppeteer.launch({});
    const page = await browser.newPage();
    page.setViewport({ width: 1980, height: 1080});
    await page.goto('http://localhost:3000');

    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
    await browser.close();
});

test('mobile render matches', async () => {
  const browser = await puppeteer.launch({});
    const page = await browser.newPage();

    const devices = puppeteer.devices;
    const iPhone = devices['iPhone 6'];
    await page.emulate(iPhone);

    await page.goto('http://localhost:3000');

    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
    await browser.close();
});
