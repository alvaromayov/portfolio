import React, { Component } from 'react';

export default class Unveil extends Component {

    removeOverflow() {
        setTimeout(() => {
            document.querySelector('body').classList.remove('overflow');
        }, 4000);
        this.deleteOverflow();
    }

    deleteOverflow() {
        setTimeout(() => {
            document.querySelector('.unveil').classList.add('delete-item');
        }, 6000);
    }

    componentDidMount(){
        this.removeOverflow();
        this.deleteOverflow();
    }

    render() {
        return (
            <div className="unveil">
                <svg id="logo" width="300" height="480" viewBox="0 0 647 480" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3874 453.244C5.0785 451.721 2.00885 446.184 3.53115 440.875L126.658 11.479C128.181 6.17011 133.718 3.10047 139.027 4.62278C144.336 6.14508 147.406 11.6829 145.884 16.9918L22.7564 446.387C21.2341 451.696 15.6963 454.766 10.3874 453.244Z" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M133.705 3.96292C139.014 2.44061 144.552 5.51026 146.074 10.8192L272.592 452.038C274.114 457.347 271.045 462.885 265.736 464.407C260.427 465.93 254.889 462.86 253.367 457.551L126.849 16.3319C125.327 11.023 128.396 5.48522 133.705 3.96292Z" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M273 459C273 464.523 268.523 469 263 469H90C84.4772 469 80 464.523 80 459C80 453.477 84.4772 449 90 449H263C268.523 449 273 453.477 273 459Z" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M263 469C257.477 469 253 464.523 253 459V20C253 14.4771 257.477 10 263 10C268.523 10 273 14.4771 273 20V459C273 464.523 268.523 469 263 469Z" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M439.572 243.66C435.341 240.11 434.79 233.803 438.34 229.572L620.891 12.0155C624.441 7.78476 630.749 7.23292 634.98 10.7829C639.21 14.333 639.762 20.6405 636.212 24.8713L453.66 242.428C450.11 246.659 443.803 247.21 439.572 243.66Z" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M256.66 10.5721C260.891 7.02208 267.199 7.57392 270.749 11.8047L453.3 229.361C456.85 233.592 456.299 239.9 452.068 243.45C447.837 247 441.53 246.448 437.98 242.217L255.428 24.6604C251.878 20.4297 252.43 14.1221 256.66 10.5721Z" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M629 9C634.523 9 639 13.4772 639 19L639 458C639 463.523 634.523 468 629 468C623.477 468 619 463.523 619 458L619 19C619 13.4772 623.477 9 629 9Z" stroke="white" stroke-width="5" stroke-linecap="round" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M639 459C639 464.523 634.523 469 629 469L352 469C346.477 469 342 464.523 342 459C342 453.477 346.477 449 352 449L629 449C634.523 449 639 453.477 639 459Z" stroke="white" stroke-width="5" stroke-linecap="round" />
                </svg>
            </div>
        )
    }
}