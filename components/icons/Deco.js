export const DecoLines = ({width, height, color}) => {
    return <svg width={width} height={height} viewBox="0 0 488 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M231.99 0.07H276.98C277.19 4.48 275.6 9.26 279.61 12.9C276.7 13.16 276.98 15.32 276.98 17.31C276.98 25.92 277 34.52 277.01 43.13C277.02 53.79 277.03 64.45 277.04 75.11C277.1 78.82 277.17 82.53 277.23 86.25C277.27 90.24 277.31 94.22 277.35 98.21C277.4 130.1 277.44 161.99 277.49 193.89C276.67 198.53 277.28 203.2 277.28 207.86C277.19 211.91 277.09 215.96 277 220.01V235.42L279.04 235.34C277.64 230.53 281.49 225.94 278.99 221.07C279.03 219.4 279.06 217.74 279.1 216.07C281.82 215.75 281.98 213.8 281.98 211.67C281.98 207.34 281.34 202.87 282.18 198.7C285.1 184.15 284.45 169.33 285.69 154.67C286.93 140 287.38 125.19 287.77 110.45C288.31 89.54 289.46 68.7 290.81 47.84C291.11 43.25 291.99 40.53 296.79 40.07C302.96 54.96 307.62 70.23 310.08 86.24C312.56 102.36 314.23 118.53 314.72 134.79C315.27 152.97 313.37 171.01 311.1 189.06C308.89 206.7 306.02 224.11 300 240.9C295.12 254.52 289.32 267.63 278.71 277.95C276.91 279.7 276.75 281.67 277.1 283.89C277.09 284.92 277.08 285.95 277.06 286.99C277.05 287.99 277.03 289 277.02 290C277.01 291.68 276.99 293.37 276.98 295.05C277 298.34 278.36 298.9 280.7 296.72C282.28 295.25 283.08 293.3 282.95 291.06C284.97 290.96 284.97 289.51 284.95 288.06C287.8 287.08 285.61 282.72 288.96 282.07C290.26 282.03 290.92 281.36 290.95 280.06C290.62 278.72 292.72 277.41 290.98 276.06L293.03 273.08C295.39 273.48 297.17 272.42 298.33 270.56C299.14 269.26 297.89 268.59 296.89 268.03C296.88 267.71 296.88 267.38 296.89 267.06C297.89 266.73 298.55 266.04 298.95 265.08C300.96 264.97 300.96 263.53 300.94 262.08C301.61 260.75 302.27 259.41 302.94 258.08C305.6 257.74 304.76 255.65 304.93 254.07C305.6 252.07 306.26 250.07 306.93 248.08C310.53 247.07 308.27 244.09 308.94 242.09C308.94 241.42 308.94 240.76 308.95 240.09C311 239.96 311.42 238.6 312.04 236.85C317.11 222.44 319.32 207.43 322.33 192.53C326.21 173.33 328.77 154.01 329.66 134.59C330.62 113.57 330.34 92.53 332.37 71.51C332.86 66.39 333.7 65.71 337.77 66.09C338.72 69.8 339.64 73.52 340.63 77.23C345.51 95.63 346.51 114.56 348.05 133.39C349.25 148.1 346.67 162.73 345.82 177.39C345.39 184.84 344.47 192.36 342.77 199.61C339.86 212.03 337.85 224.63 334.04 236.88C328.4 255 322.27 272.84 311.58 288.68C302.34 302.36 293.01 316.07 278.07 324.46C277.16 324.97 276.67 325.87 277.01 327.01C277.01 328 277.01 329 277.01 329.99C277.01 331.3 276.91 332.61 277.01 333.92C277.16 336.01 278.77 336.79 279.91 335.32C283.9 330.22 290.16 327.25 293.01 321.14C298.73 318.84 300.88 313.01 304.96 309.08C306.96 308.97 306.96 307.54 306.95 306.09L308.94 304.08C311.84 303.67 313.03 301.88 312.93 299.08C316.93 293.08 320.92 287.09 324.92 281.09C326 280.34 327.68 279.8 325.94 278.09C326.28 276.77 326.62 275.45 326.97 274.13C329.96 272.28 329.9 268.54 331.94 266.09C335.23 262.77 337.44 259 336.94 254.09C336.96 253.27 337.13 252.52 337.93 252.08C339.81 252 340.39 250.52 340.77 249.13C342.22 243.8 343.55 238.43 344.92 233.07C344.92 231.74 344.92 230.41 344.93 229.08C346.19 228.88 347.44 228.66 345.93 227.08C345.93 226.41 345.93 225.75 345.93 225.08C347.19 224.87 348.43 224.66 346.92 223.08C346.92 222.41 346.92 221.75 346.92 221.08C351.01 217.2 351.1 212.18 350.91 207.08C350.91 206.08 350.91 205.08 350.92 204.08C353.04 203.85 353.78 202.17 353.78 200.54C353.79 192.8 357.42 185.87 358.32 178.22C359.97 164.25 361.73 150.31 361.84 136.25C361.91 127.59 362.03 118.88 362.38 110.28C362.9 97.71 364.26 85.16 363.83 72.56C363.67 67.96 365.57 66.55 369.73 67.09C373.65 79.39 375.57 92.05 377.07 104.84C377.93 112.17 378.24 119.54 379.2 126.83C380.97 140.29 379.43 153.68 378.71 167.06C378.18 176.78 376.45 186.44 374.96 196.09C373.75 203.96 372.41 211.83 370.58 219.57C368.77 227.23 366.3 234.75 364.11 242.31C358.79 260.74 350.83 277.91 341.13 294.34C331.52 310.62 319.32 324.83 305.92 338.06C296.8 345.05 288.12 352.66 277.72 357.83C276.75 358.31 276.89 359.12 277.02 359.95C277.3 361.1 277.59 362.25 277.87 363.4C276.85 364.64 276.9 366.1 278.04 366.95C279.61 368.12 280.16 366.12 281.04 365.42C283.37 363.57 285.69 361.7 287.81 359.62C289.26 358.19 292.01 357.88 291.92 355.06C298.14 354.02 301.81 350.27 300.86 345.93C301.16 344.9 301.91 344.36 302.87 344.03C304.66 344.26 306.11 344.09 305.63 341.67L307.42 339.33C309.27 337.96 311.12 336.6 312.96 335.23C312.86 337.39 313.29 338.8 315.6 336.83C318.28 334.55 320.82 332.15 319.92 328.08C320.02 326.97 320.82 326.42 321.64 325.88C324.29 326.6 324.95 323.68 326.86 323.04C333.35 320.29 336.55 314.2 339.73 308.75C342.29 304.37 347.56 301.22 347 295.15C348.22 295.01 348.88 294.34 348.95 293.1C350.9 291.99 351.58 290.12 351.94 288.07C354.15 288.27 355.12 287.26 354.91 285.06C354.91 284.73 354.91 284.39 354.91 284.06C358.21 283.79 357.88 281.32 357.92 279.07C361.32 276.98 362.34 273.84 361.91 270.06C361.93 269.24 362.1 268.5 362.9 268.06C364 267.97 364.49 267.32 365 266.34C367.88 260.88 369.82 254.99 372.3 249.37C373.75 246.09 376.66 242.38 374.89 238.06C374.89 237.06 374.89 236.06 374.89 235.06C377.94 231.63 380.15 227.92 378.88 223.06C378.88 222.39 378.88 221.73 378.88 221.06C380.33 221 380.8 220.02 381.09 218.8C382.66 212.27 384.28 205.75 385.81 199.2C386.07 198.08 386 196.86 384.87 196.06C384.87 195.39 384.87 194.73 384.87 194.06C386 193.52 386.45 192.59 386.89 191.42C390.27 182.31 390.9 172.62 391.62 163.2C392.92 146.07 394.14 128.91 394.15 111.67C394.15 101.9 394.25 91.83 397.3 82.23C398.12 79.66 398.48 76.08 401.68 80.68C402.76 82.23 404.2 81.99 405.66 82.06C409.94 104.05 412.15 126.23 411.85 148.64C411.81 151.74 410.88 154.84 410.9 157.94C410.96 169.15 409.55 180.31 407.63 191.22C404.95 206.46 401.98 221.68 398.05 236.73C393.04 255.89 385.95 274.14 377.25 291.81C364.3 318.13 344.52 338.89 322.5 357.72C309.49 368.85 295.5 378.56 280 385.96C278.49 386.68 276.34 387.16 277.15 389.74C277.84 394.49 280.61 390.89 282.18 390.73C284.11 390.54 284.67 389.13 282.49 387.91C283.19 387.52 283.89 387.14 284.58 386.75C286.24 387.31 287.61 387.27 287.95 385.11C288.61 384.76 289.27 384.41 289.93 384.06C291.27 387.9 293.44 385.31 294.83 384.4C301.43 380.09 307.53 375.01 314.68 371.51C316.04 370.84 316.98 369.6 316.82 367.88C316.79 367.18 316.76 366.48 316.74 365.77C317.48 365.2 318.22 364.63 318.96 364.05C323.94 363.34 327.21 360.6 328.78 355.82C329.48 355.21 330.18 354.61 330.88 354L333.78 353.92C336.09 354.43 337.47 352.99 338.91 351.55C345.46 344.96 352.04 338.39 358.62 331.83C360.29 330.16 361.79 328.43 361.85 325.89C362.17 325.26 362.49 324.62 362.81 323.99C364.9 323.95 365.95 322.94 365.76 320.79C366.09 320.18 366.43 319.56 366.76 318.95C368.97 319.02 368.95 317.53 368.83 315.97V315.95C370.19 315.82 371.48 315.66 369.8 314C372.31 311.42 372.67 307.04 376.71 305.74C379.7 306.12 382.08 302.59 381.91 298.03C382.25 297.03 382.59 296.03 382.93 295.04C387.82 292.76 388.58 287.62 390.52 283.48C393.9 276.25 398.76 269.5 398.91 261.04C398.91 260.71 398.91 260.37 398.91 260.04C404.02 254.46 405.98 247.15 407.55 240.32C410.48 227.63 414.15 215.12 416.9 202.36C422.07 178.36 425.79 154.29 425.9 129.71C425.9 128.55 425.87 127.37 426.06 126.23C428.53 111.65 424.83 96.68 428.85 82.2C426.11 75.34 429.84 69.05 430.63 62.51C430.66 62.3 431.5 62.19 431.96 62.03C433.44 64.71 433.26 67.83 434.09 70.63C440.25 91.5 441.58 113.05 442.38 134.53C442.99 150.95 441.38 167.38 438.98 183.73C436.91 197.84 434.42 211.82 430.91 225.64C426.99 241.11 422.39 256.31 416.46 271.19C410.97 284.97 404.41 298.09 396.52 310.56C381.54 334.22 361.94 353.71 340.54 371.48C321.81 387.03 301.81 400.67 279.68 411.02C278.25 411.69 275.68 412.08 277.81 414.69C278.9 417.13 280.21 415.16 281.3 414.75C282.12 414.44 283.14 413.64 281.46 412.86C282.94 412.19 284.42 411.52 285.9 410.86C286.05 411.62 286 412.82 287.18 412.38C288.28 411.97 287.91 410.73 287.88 409.77C288.32 409.55 288.77 409.33 289.21 409.12C290.69 412.87 292.65 410 293.98 409.21C297.48 407.14 300.72 404.62 304.15 402.42C305.58 401.51 307.07 400.82 306.87 398.77L307.15 398.54C309.09 399.04 310.91 399.36 310.59 396.33C311.46 395.75 312.33 395.17 313.19 394.59C314.88 394.84 316.98 395.69 316.27 392.47L316.53 392.35C320.05 393.23 322.6 392.69 322.52 388.28C324.14 387.11 325.76 385.94 327.38 384.77C329.26 385.05 330.98 385.13 330.61 382.38C330.88 382.18 331.15 381.99 331.42 381.79C333.04 381.86 335.11 382.49 334.27 379.5L334.51 379.37C337.47 380.42 338.96 379.6 338.47 376.26C339.09 375.75 339.7 375.25 340.32 374.74C342.99 375.17 345.05 374.83 344.56 371.33C345.18 370.82 345.8 370.31 346.42 369.79C348.71 370.63 350.2 369.01 351.88 367.99C355.26 368.06 356.93 366.4 356.9 363.02C360.12 360.32 364.08 358.22 364.59 353.36C366.47 351.47 368.36 349.57 370.24 347.68C372.72 348.39 373.83 346.66 374.98 345.01C382.61 341.77 387.38 335.5 391.86 328.95C393.01 327.04 392.68 324.37 394.9 323C396.19 322.96 396.85 322.29 396.89 321C398.92 319.95 400.12 318.41 399.89 316C405.19 313.25 406.21 307.55 408.86 302.97L408.89 301C410.18 300.95 410.84 300.28 410.87 298.99C414.2 297.8 414.99 295.16 414.87 291.99C414.85 291.16 414.68 290.42 413.86 289.99C414.55 288.33 415.23 286.67 415.92 285.01C417.01 284.99 418.16 285.14 418.87 283.99C421.36 282.74 422.68 280.9 421.87 277.99C421.85 276.97 421.83 275.95 421.81 274.93C422.14 274.59 422.48 274.24 422.81 273.9C427.08 272.76 426.87 269.32 426.87 265.99C426.87 265.66 426.87 265.33 426.87 264.99C428.52 264.93 429.24 263.72 429.53 262.42C431.42 253.99 435.02 246.13 437.57 237.94C441.98 223.8 445.74 209.43 448.37 194.82C449.73 187.31 452.34 180.1 453.7 172.65C456.86 155.41 458.29 137.85 458.51 120.41C458.72 104.13 461.35 88.03 460.82 71.76C460.74 69.18 461.19 66.84 462.54 64.62C463.55 62.95 464.98 62.42 466.08 64C469.79 69.36 469.54 66.08 469.44 62.6C469.44 62.41 470.25 62.2 470.69 61.99C473.34 68.67 474.38 75.77 476.16 82.66C480.45 99.3 482.69 116.26 483.58 133.22C484.43 149.54 485.7 165.88 485.69 182.25C485.69 183.74 485.69 185.23 485.7 186.72C485.73 192.33 485.72 197.94 485.83 203.55C485.86 204.99 485.01 207.07 487.68 207.29L487.62 206.87C485.07 207.34 484.84 209.32 484.82 211.32C484.72 225.3 481.77 238.71 478.01 252.14C474.05 266.27 469.25 279.99 463.02 293.24C452.52 315.56 438 335.12 421.27 353.08C393.98 382.37 362.75 406.79 328.72 427.74C322.96 431.29 317.2 434.84 311.44 438.4C310.59 438.91 309.74 439.42 308.89 439.93C298.67 444.68 289.22 451.01 278.51 454.72C276.62 455.37 276.97 456.53 276.99 457.81C276.99 458.82 276.99 459.83 277 460.83C277.3 462.2 277.61 463.57 277.91 464.94C278.65 480.57 276.65 496.15 276.9 511.77C274.67 516.94 275.93 521.92 277.71 526.87C276.8 526.87 275.88 526.88 274.97 526.89V512.61C274.69 512.61 274.41 512.61 274.13 512.62V619.9C274.07 621.56 273.94 623.22 273.94 624.88C273.92 694.96 273.88 765.03 273.89 835.11C273.91 897.03 273.98 958.95 274.04 1020.86C273.99 1021.88 273.95 1022.9 273.9 1023.92H268.9C268.9 971.58 268.9 919.25 268.89 866.91C268.45 856.81 268.98 846.74 268.13 836.59C266.68 819.25 263.22 802.3 260.13 785.27C257.81 772.5 255.38 759.74 252.71 747.04C250.31 735.63 247.52 724.3 244.9 712.93C244.9 712.27 244.89 711.61 244.88 710.95C244.89 710.12 244.71 709.37 243.91 708.93C244.25 706.82 243.25 704.94 242.89 702.95C242.89 702.12 242.72 701.38 241.92 700.93C238.92 686.42 235.93 671.91 232.9 657.41C230.46 645.77 225.8 634.71 223.9 622.94C226.26 623.05 226.14 625.18 226.64 626.59C232.15 642.23 236.09 658.34 239.69 674.46C245.96 702.54 253.01 730.37 262.25 757.63C264.74 764.98 267.17 772.38 267.03 780.37C266.99 782.71 267.46 785.29 269.91 787.18V743.92C270.3 740.52 269.42 737.24 268.92 733.93C270.98 727.85 269.82 721.63 269.52 715.48C269.43 713.65 267.87 712.73 265.92 712.93C264.41 708.69 265.04 704.28 264.91 699.94C264.78 698.56 265.36 697 263.92 695.94C263.06 685.84 260.26 676.16 256.87 666.7C255.6 663.14 257.25 658.86 253.97 655.93C253.96 655.27 253.94 654.61 253.93 653.94C254.02 651.7 253.84 649.54 251.97 647.94C251.96 647.28 251.94 646.61 251.93 645.95C252.03 644.26 251.75 642.74 250 641.94C249.98 640.94 249.96 639.95 249.93 638.95C249.75 637.39 250.57 635.35 248 634.92C248.12 632.08 247.52 629.38 246.75 626.64C244.24 617.79 241.86 608.9 239.57 599.99C237.56 592.19 235.4 584.32 231.97 576.93C231.95 576.6 231.93 576.26 231.92 575.93C232.05 575.84 232.3 575.7 232.28 575.66C232.18 575.42 232.03 575.2 231.89 574.98C230.91 571.63 229.93 568.29 228.95 564.94H231.92C232.15 570.24 234.51 574.96 235.93 579.94C235.95 580.76 236.13 581.5 236.92 581.94C236.83 583.69 236.99 585.4 237.93 586.94C237.96 588.04 237.77 589.21 238.93 589.94C240.26 594.27 241.6 598.61 242.93 602.94C244.36 608.01 244.54 613.5 247.91 617.93C247.91 618.27 247.92 618.6 247.93 618.94C248.03 620.42 247.91 621.96 248.27 623.39C251.17 635.07 255.41 646.35 258.77 657.89C261.8 668.31 267.36 678.14 266.83 689.57C270.12 688.65 271 686.53 271.03 683.27C271.08 678.77 270.39 674.37 269.94 669.94C269.88 656.93 270.34 643.91 268.94 630.93C270.32 629.17 270.69 627.66 267.94 626.93C266.76 625.07 266.92 622.99 266.94 620.93C268.45 619.36 267.21 619.14 265.95 618.93C265.27 615.92 264.59 612.92 263.91 609.91C263.81 609.09 263.81 608.25 263.61 607.45C260.32 594.2 257.33 580.87 253.57 567.76C251.37 560.07 249.41 552.23 245.96 544.93C245.26 542.09 244.9 539.1 243.79 536.43C241.41 530.73 241.63 524.18 237.99 518.92C237.96 512.63 234.4 511.11 228.83 511.87C226.26 512.22 223.6 511.99 220.98 512.03C219.99 512.03 219 512.03 218.01 512.03C217.67 512.01 217.32 511.99 216.98 511.97C216.2 512.13 214.89 512.1 214.76 512.49C214.42 513.46 215.06 514.37 215.99 514.93C216.01 515.25 216.02 515.57 216.02 515.89C220.33 529.57 224.64 543.26 228.95 556.94C228.97 557.76 229.15 558.5 229.94 558.94C229.94 559.94 229.95 560.94 229.96 561.94C229.31 561.94 228.65 561.94 228 561.94C225.95 554.17 223.83 546.42 220.86 538.93C219.49 530.65 216.09 522.98 213.73 515C213.47 514.66 213.2 514.31 212.94 513.97C211.19 509.9 207.54 512.83 204.97 511.8C205.16 510.68 205.8 510.09 206.96 509.98C217.86 509 228.78 508.58 239.7 509.11C241.78 509.21 244.9 508.71 245.93 511.9C245.61 511.94 245.28 511.97 244.96 512C243.63 512 242.31 512 240.98 511.99C240.17 512.09 239.29 512.16 239.15 513.2C238.97 514.54 239.92 514.8 240.94 514.95C240.94 515.28 240.95 515.61 240.96 515.94C242.16 527.11 247.75 537.05 249.95 547.94C253.02 558.03 255.98 568.15 259.19 578.2C261.31 584.82 261.38 592.16 265.95 597.94C265.95 599.27 265.95 600.6 265.95 601.93C267.85 605.83 265.64 610.8 269.53 615.16C269.53 611.18 271.78 608.23 269.95 604.94C271.99 595.92 270.53 586.78 270.9 577.71C271.01 575.1 271.44 572.38 269.94 569.93C270.35 554.38 270.22 538.88 264.98 523.94C265.97 523.94 266.95 523.94 267.94 523.94C267.94 525.76 268.14 527.48 270.77 528.89C270.91 522.45 271.04 516.54 272.92 510.91C272.88 509.84 272.84 508.77 272.8 507.69C272.82 504.41 272.85 501.14 272.87 497.86C273.36 496.02 274.4 494.14 272.4 492.52C271.67 491.43 270.6 490.85 269.37 490.5C268.97 490.24 268.57 489.97 268.17 489.71C253.74 480.52 237.82 475.82 220.94 474.05C208.52 472.24 196.19 472.91 183.91 475.28C182.95 475.49 181.98 475.68 181.02 475.91C167.29 479.08 153.91 483.16 141.93 490.91L141.96 490.87C139.23 491.55 136.88 492.87 134.93 494.91L134.96 494.87C133.63 495.06 132.55 495.64 131.93 496.9L131.96 496.87C130.58 496.99 129.62 497.75 128.93 498.9L128.96 498.86C127.92 499.18 126.68 499.29 126.92 500.89L126.98 500.85C125.87 500.36 125.31 500.95 124.94 501.89L124.96 501.86C123.85 502.1 122.67 502.26 122.92 503.88L122.97 503.84C121.84 503.31 121.36 504.05 120.94 504.89L120.97 504.86C120.33 504.91 119.92 505.19 119.93 505.89L119.95 505.86C118.77 506.03 117.65 506.26 117.92 507.88L117.98 507.84C116.86 507.33 116.36 508.03 115.94 508.89L115.98 508.86C115.63 509.21 115.29 509.55 114.94 509.9L114.98 509.86C114.32 509.89 113.93 510.18 113.94 510.89L113.98 510.86C113.23 510.83 112.81 511.22 112.64 511.92C112.11 511.97 111.58 512.03 111.05 512.08C109.38 512.06 107.71 512.04 106.04 512.02C104.37 512.02 102.7 512.02 101.04 512.02C99.7004 512 98.3704 511.98 97.0304 511.96C96.3404 511.96 95.6604 511.97 94.9704 511.98C94.6604 511.98 94.3604 511.97 94.0504 511.98C92.9604 512.1 91.0304 511.49 90.9604 512.5C90.8304 514.32 92.7904 513.78 94.0004 513.96L95.0004 514.95C95.3304 517.95 97.7004 518.4 100 518.96C100.39 519.5 100.68 520.15 101.17 520.56C112.54 529.8 122.81 540.16 131.4 551.99C139.55 563.22 148.89 573.73 154.03 586.92C154.11 588.67 155.16 589.98 155.96 591.44C159.79 598.39 164.09 605.11 167.76 612.11C176.89 629.53 186.38 646.8 193.55 665.17C197.27 674.71 200.59 684.4 204 694.06C206.95 702.43 209.43 711 212.82 719.18C214.3 722.75 215.7 726.23 215.88 730C216.04 733.25 217.01 736.13 218 739.14C220.38 746.32 223.24 753.48 224.44 760.88C225.57 767.86 226.41 775.17 228.75 781.54C232.81 792.56 233.98 804.05 236.84 815.23C238.11 820.19 239.82 825.06 240.82 830.04C242.72 839.42 243.61 849.04 245.33 858.41C249.01 878.41 252.86 898.34 255.11 918.58C255.8 924.79 255.64 931.22 257.85 938.02C259.3 935.89 258.94 934.22 258.92 932.68C258.74 918.43 257.38 904.26 256.15 890.07C255.11 878.04 254.1 865.99 252.66 854.01C250.87 839.09 248.48 824.23 245.84 809.43C244.13 799.89 243.78 790.04 239.96 780.93C238.2 776.06 238.53 770.84 237.42 765.86C233.97 750.37 229.95 735.01 226.19 719.59C221.68 701.08 216.87 682.72 209.98 664.95C212.59 664.58 213.39 666.49 214.11 668.34C215.48 671.82 216.8 675.33 218.04 678.85C220.05 684.53 221.98 690.24 223.95 695.94C223.95 696.6 223.95 697.27 223.95 697.93C229.19 720.64 236.39 742.84 241.63 765.58C244.55 778.26 247.44 791.04 250.95 803.56C256.86 824.68 260.31 846.2 263.83 867.74C266.32 882.98 266.56 898.43 266.85 913.83C267.2 932.53 266.93 951.24 266.93 969.95V1023.92H249.94C249.84 1018.29 249.26 1012.65 249.14 1007.07C248.61 983.87 247.31 960.73 246.06 937.57C245.34 924.18 243.86 910.87 242.68 897.55C241.11 879.98 238.45 862.5 235.87 845.03C234.63 836.61 234.37 827.94 230.95 819.93C231.11 813.56 229.1 807.53 227.9 801.38C223.88 780.79 220.12 760.13 214.41 739.92C210.12 724.72 205.98 709.44 200.68 694.59C198.11 687.39 197.31 679.5 192.96 672.93C186.39 653.06 176.25 634.82 167.01 616.17C166.6 615.35 165.91 614.98 165.05 614.82C163.78 608.3 159.54 603.19 156.56 597.53C152.97 590.71 149.85 583.46 144.18 577.89C135.57 562.27 124.47 548.57 111.97 535.95C106.45 529.93 100.3 524.71 92.9704 520.98C90.4704 518.95 87.4604 518.03 84.4204 517.36C76.1404 515.53 68.2704 520.81 66.9104 528.95C65.5304 530.04 66.5704 531.08 67.0604 532.01C70.0704 537.67 75.2104 541.26 80.5704 544.04C92.4104 550.18 102.04 558.88 110.67 568.76C117.29 576.33 125.71 582.41 130.02 591.91C130.01 593.23 130.68 593.89 131.98 593.91C132.64 594.25 133.29 594.6 133.95 594.94C134.55 598.28 134.5 602.02 138.96 602.93C139 606.62 141.74 608.6 143.97 610.91C144.31 611.25 144.64 611.58 144.98 611.92C146.65 615.71 148.04 619.7 151.96 621.92C151.89 623.28 152.46 624.39 153.02 625.62C155.75 631.62 159.61 636.92 163 642.52C164.92 645.69 165.84 649.5 168.96 651.91H168.97C169.49 653.31 169.89 654.76 170.55 656.08C179.51 674.18 187.84 692.51 193.53 711.98C197.7 726.25 202.88 740.24 206.72 754.59C209.66 765.55 211.32 776.82 214.72 787.74C218.09 798.56 218.55 810.14 221.98 821.03C224.81 830.04 226.11 839.36 227.75 848.62C229.28 857.25 231.44 865.77 232.89 874.41C234.97 886.79 236.33 899.35 238.45 911.66C241.47 929.16 243.36 946.72 244.77 964.33C246.36 984.15 246.92 1004.05 247.92 1023.92H224.93C224.69 1021.8 225.46 1019.52 223.93 1016.75C222.4 1019.51 223.17 1021.79 222.93 1023.92H200.94C200.71 1021.47 201.44 1018.9 199.94 1015.55C198.44 1018.9 199.15 1021.47 198.94 1023.92H188.94C188.46 1018.6 190.01 1013.14 187.94 1007.92C187.36 1002.94 189.12 997.8 186.94 992.92C186.94 992.26 186.94 991.59 186.94 990.93C187.04 979.79 185.11 968.84 184.07 957.8C182.31 939.15 178.79 920.8 175.2 902.47C170.67 879.4 165.88 856.38 160.75 833.45C158.99 825.58 158.57 817.33 154.93 809.91C154.53 804.95 153.02 800.22 151.63 795.51C147.8 782.53 144.07 769.52 138.96 756.96C139.04 756.64 139.08 756.3 139.2 756C139.24 755.89 139.58 755.79 139.59 755.81C140.26 756.92 140.99 758 141.55 759.16C145.89 768.15 148.69 777.72 152.14 787.05C156.46 798.76 161.49 810.15 164.2 822.48C166.57 833.25 171.3 843.43 173.23 854.38C173.66 856.81 174.01 859.3 174.84 861.6C180.2 876.41 181.88 892.11 185.75 907.29C188.96 919.87 190.84 932.81 192.43 945.75C193.66 955.75 196.23 965.56 196.04 975.76C195.97 979.29 196.96 982.85 197.47 986.39C200.15 978.29 198.34 970.37 197.65 962.59C196.22 946.31 193.84 930.13 191.16 913.97C186.88 888.15 181.54 862.57 175.4 837.17C168.95 810.45 159.32 784.81 146.18 760.61C141.93 752.79 137.7 744.88 131.97 737.95C127.65 732.88 125.72 726.35 121.67 721.12C120.53 719.65 120.47 717.2 117.99 716.9C114.66 708.39 107.09 703.12 101.99 695.96C98.2104 690.12 93.6404 684.81 88.4504 680.36C84.2004 676.72 81.1804 671.3 75.1404 669.91C74.6404 669.08 74.3303 668.01 73.6303 667.44C60.2403 656.69 45.6704 647.82 29.8504 641.22C21.9804 637.94 13.7404 635.08 5.08036 639.04C3.54036 638.84 2.61038 639.66 1.98038 640.94C1.32038 640.96 0.660372 640.99 0.000372292 641.01C-0.0296277 638.89 1.76037 637.95 2.87037 636.55C5.86037 632.81 9.18036 629.21 8.99036 623.92C8.94036 622.87 8.88038 621.83 8.82038 620.78H8.80036C12.5704 620.29 12.9704 617.71 12.6104 614.66L12.6404 614.58C14.1804 615.21 14.7604 614.31 15.0904 613.03C20.5304 609.48 23.5504 604.18 25.7104 598.28C26.1704 597.04 26.2804 595.67 24.7704 594.86C24.9904 592.51 26.1804 590.68 27.8504 589.12C32.1704 588.25 33.6204 585.68 32.3504 581.5L32.4104 581.34C36.6804 580.95 38.5604 577.28 36.3304 573.71C36.9504 572.02 37.1404 570.08 39.0604 569.16C40.6404 570.61 41.5504 569.09 42.0904 568.17C44.5704 563.99 46.8504 559.7 49.2104 555.45C49.7204 554.53 50.0204 553.65 48.8904 552.95C48.8304 552.22 48.7804 551.49 48.7204 550.76C48.8404 550.51 48.9404 550.27 49.0504 550.02C51.3204 549.34 52.0003 547.82 51.3803 545.62C51.7203 545.27 52.0704 544.93 52.4104 544.58C52.8904 544.64 53.6404 544.91 53.8004 544.71C58.4204 539.02 61.7504 532.68 63.3904 525.5C64.0904 524.01 64.8004 522.52 65.5004 521.03C68.6404 518.94 70.4304 515.61 72.9604 512.97C75.2404 512.74 76.8604 511.38 78.5504 509.96C85.2504 504.28 91.7704 498.35 98.8304 493.15C115.32 481 133.12 471.18 152.47 464.22C164.46 459.9 176.58 455.41 189 453.37C206.5 450.49 224.39 450.51 241.88 454.99C249.8 457.02 257.68 459.24 265.59 461.33C267.54 461.85 269.82 463.37 270.93 460.09C274.82 459.17 271.98 456.9 271.92 455.19C272.28 455.16 272.63 455.12 272.99 455.09C273.73 454.97 273.85 454.55 273.57 453.92C273.57 442.96 273.57 432 273.58 421.03C273.86 420.2 274.32 419.3 272.89 419.07C270.73 418.51 268.98 420 266.99 420.27C265.72 419.73 264.9 420.75 263.9 421.14C263.26 421.18 262.63 421.21 261.99 421.25C261.3 421.53 260.6 421.81 259.91 422.08C256.59 422.4 253.27 422.72 249.96 423.04C250.45 420.87 248.45 417.68 252.17 416.84C255.81 416.01 257.62 413.45 259.18 410.47C259.79 409.31 260.5 408.47 261.92 407.91C270.47 404.51 274.18 399.01 272.92 391.96C272.92 390.63 272.92 389.3 272.92 387.96C272.94 386.64 272.95 385.33 272.96 384.01C273.25 381.62 273.54 379.23 273.83 376.85C272.33 372.78 273.26 368.48 272.79 363.85C264.35 370.09 255.63 375.12 246.72 379.81C227.43 389.97 207.25 398.12 186.98 406.07C168.65 412.23 150.42 418.62 133.02 427.15C116.87 434.49 101.85 443.85 87.0804 453.57C82.7104 456.44 77.9804 459.29 74.7304 463.71C70.7904 466.38 67.1004 469.35 63.7704 472.75C60.9904 475.32 57.1403 476.86 55.8803 480.9H55.9104C54.8104 480.46 54.4704 480.79 54.9004 481.9H54.9104C53.8004 481.46 53.4604 481.8 53.9004 482.91L53.9504 482.87C52.4704 481.7 52.2704 483.61 51.4204 483.93C50.9304 484.42 50.4404 484.91 49.9504 485.4C49.2704 486.24 48.6004 487.07 47.9204 487.91L47.9104 487.92C47.1104 488.35 45.9503 488.59 46.8803 489.92L46.9204 489.86C42.4704 491.37 40.6304 495.57 37.7804 498.73C37.5004 498.82 37.2303 498.89 36.9403 498.95C35.9003 498.35 34.4804 497.34 35.5204 496.33C38.6304 493.32 39.1604 488.92 41.7604 485.67C52.5304 472.15 64.8704 460.13 77.3104 448.21C80.5304 445.12 82.8504 441.34 86.4704 438.47C93.2004 433.12 100.28 428.08 105.93 421.47C111.32 415.16 117.62 410.03 125.1 406.41C127.75 405.13 130.21 403.21 131.26 400.79C132.91 397.02 135.61 395.18 138.96 393.18C151.54 385.68 161.93 374.9 175.53 368.83C182.62 365.66 189.11 360.89 196.42 358.54C211.01 353.85 225.6 349.05 240.91 346.81C250.26 345.45 259.65 345.01 269.01 344.09C272.04 343.79 273.29 342.95 272.91 339.97C272.92 338.66 272.93 337.36 272.95 336.05C274.24 334.82 273.86 333.26 273.79 331.76C273.82 330.1 273.73 328.43 273.91 326.78C274.13 324.67 273.43 323.98 271.22 323.86C264.59 323.5 258.07 324.65 251.57 325.38C241.99 326.46 232.51 328.45 222.99 330.05C222.86 325.13 226.9 324.95 230.08 324.03C237.12 321.99 243.98 319.62 250.58 316.31C256.12 313.53 259.97 308.15 265.76 306.25C272.27 304.11 273.52 299.8 272.92 293.97C272.92 292.96 272.9 291.95 272.9 290.94C272.95 289.99 273.01 289.04 273.06 288.09C273.03 287.11 273.01 286.12 272.98 285.14C274.53 278.83 273.24 272.43 273.65 266.08C273.9 265.34 273.74 264.94 272.87 265.13C272.24 264.97 272.01 265.34 271.89 265.86C258.84 273.33 245.08 279.41 231.41 285.57C217.63 291.78 203.56 297.34 190 304.06C184.12 306.38 178.57 309.37 173.09 312.47C144.29 328.75 118.78 349.57 93.2904 370.42C92.5904 370.99 90.9304 371.3 91.9004 372.92L91.9403 372.89C90.6403 371.98 90.2503 372.85 89.9403 373.9L89.9104 373.93C87.8004 375.15 85.3004 375.97 84.9104 378.92H84.9204C84.6304 378.84 84.3504 378.78 84.0604 378.71C84.0104 379.11 83.9604 379.51 83.9204 379.92L83.9604 379.89C82.6704 379 82.3004 379.95 81.9504 380.91C81.2704 380.91 80.8604 381.18 80.9304 381.92C78.7504 383.07 76.4904 384.15 75.9304 386.92L75.9504 386.9C74.9404 386.57 74.4304 386.74 74.9304 387.92L74.9504 387.9C73.8404 387.48 73.4804 387.81 73.9304 388.93L73.9704 388.89C73.5604 388.94 73.1404 388.99 72.7304 389.04C72.8004 389.33 72.8703 389.63 72.9403 389.92L72.9804 389.88C71.7704 389.37 71.4303 389.71 71.9403 390.92L72.0104 390.87C70.5104 389.65 70.3204 391.58 69.4704 391.93L69.0804 392.01L69.0004 392.4C68.6504 392.92 68.2903 393.43 67.9403 393.95L67.9804 393.89C67.3104 393.91 66.9604 394.25 66.9504 394.92L66.9804 394.89C66.3004 394.89 65.9704 395.26 65.9504 395.93L65.9904 395.89C65.3304 395.92 64.9504 396.24 64.9504 396.93L64.9804 396.9C64.2904 396.9 63.9503 397.25 63.9403 397.94L63.9804 397.9C63.2804 397.89 62.9003 398.19 62.9403 398.93L62.9704 398.9C62.2304 398.85 61.9203 399.23 61.9403 399.93L61.9804 399.89C61.2904 399.89 60.9403 400.23 60.9403 400.93L60.9804 400.89C60.2804 400.89 59.9603 401.26 59.9403 401.93L59.9804 401.89C59.3204 401.92 58.9703 402.27 58.9403 402.94L58.9904 402.89C58.3204 402.92 58.0103 403.31 57.9403 403.94L57.9804 403.89C56.9804 404.24 56.3004 404.92 55.9504 405.92V405.9C55.2604 406.4 54.0304 406.64 54.9304 407.95L54.9904 407.87C53.7404 407.33 53.6104 407.91 53.9304 408.93L53.9704 408.87C52.8404 408.4 52.6504 408.9 52.9204 409.88L52.9604 409.85C51.8304 409.43 51.7604 410.05 51.9204 410.91L51.9704 410.86C51.0404 410.63 50.7304 411.02 50.9204 411.91L50.9704 411.86C50.0404 411.65 49.8504 412.25 49.7704 412.96C49.2304 412.98 48.6904 413 48.1504 413.02C46.1204 410.52 46.9103 408.26 48.4403 405.8C51.4403 400.98 55.6704 397.01 58.5704 392.31C67.9604 377.09 79.7604 364.04 92.6004 351.8C93.5504 350.89 94.2104 349.7 95.1104 348.73C101.17 342.13 106.62 334.77 113.18 328.92C120.82 322.11 127.51 314.4 135.17 307.65C142.48 301.2 148.89 293.74 156.26 287.37C162.99 281.55 169.93 275.98 177.6 271.17C183.58 267.42 189.34 263.28 195.53 259.76C201.8 256.19 208.97 254.94 215.14 251.23C232.56 240.75 250.79 232.26 271.06 228.93C272.25 228.73 272.76 228.06 272.91 226.96C272.89 225.6 272.86 224.24 272.84 222.88C272.87 221.59 272.9 220.29 272.93 219C273.64 217.08 273.27 215.94 270.92 216.26C273.1 212.05 273.17 207.53 272.91 202.96C272.91 201.62 272.91 200.29 272.9 198.95C272.9 198.27 272.88 197.6 272.87 196.92C272.85 196.23 272.84 195.54 272.82 194.86C273.38 192.17 271.42 192.87 270.13 192.98C267.05 193.25 263.98 193.66 260.91 194.01C261.26 192.77 261.61 191.53 261.96 190.3C262.94 190.17 263.92 190.04 264.9 189.91C266.62 191.79 268.93 191.1 270.86 190.86C273.46 190.54 270.58 189.55 270.84 188.84C271.64 188.46 272.82 188.6 272.96 187.45C266.04 186.03 259.63 188.92 252.97 189.73C253.8 185.49 257.56 185.74 260.51 185.05C264.16 184.2 267.93 183.85 271.63 183.16C272.91 182.92 274.59 182.44 272.47 180.81C274.49 179.2 272.91 177.91 272.08 176.56C271.66 173.37 269.12 175.85 267.84 174.97C268.85 172.67 273.26 175.89 273.11 171.72C273.69 169.18 271.42 169.07 270.08 168.16C271.69 167.8 273.19 167.32 273.15 164.9C271.33 165.28 269.63 165.64 267.92 165.99C267.02 161.83 272.5 163.09 272.95 160.07C273.75 159.52 273.9 158.74 273.75 157.85C273.48 157.54 273.2 157.23 272.93 156.92L272.99 156.94C272.83 155.93 272.68 154.92 272.52 153.91C272.43 153.03 272.34 152.16 272.25 151.28L272.29 151.19C272.13 149.08 275.59 146.17 270.93 145.05C270.93 144.35 270.92 143.65 270.91 142.95C272.64 142.15 273.04 140.7 272.88 138.97C272.9 137.98 272.92 136.99 272.94 136C272.95 135 272.96 134.01 272.98 133.01C272.93 132.65 272.89 132.29 272.84 131.94C272.94 131.63 272.91 131.32 272.76 131.03C272.76 130.67 272.76 130.3 272.77 129.94C272.82 128.29 272.87 126.64 272.92 124.98C272.9 124.66 272.89 124.34 272.89 124.02C273.58 123.66 273.56 123.31 272.89 122.96C273.17 121.53 273.45 120.09 273.74 118.66C273.52 114.67 271.36 117.93 270.13 117.69C270.06 117.12 269.99 116.55 269.91 115.98C271.16 115.41 271.96 114.51 271.94 113.06C271.87 111.87 275.26 109.61 270.91 109.76C274.1 103.77 272.59 97.28 272.9 90.99C272.87 89.61 272.83 88.24 272.8 86.86C272.89 84.86 273.17 82.82 271.9 81.03C272.91 79.17 273.47 77.3 271.95 75.42L271.92 74.02C273.09 74.09 273.67 73.78 272.87 72.56C272.88 65.71 272.9 58.86 272.91 52.01C272.91 49.68 272.91 47.36 272.92 45.03C272.95 43.38 272.97 41.73 273 40.07C273.92 39.05 273.9 37.94 273.29 36.78C273.65 34.58 273.53 32.47 272.17 30.58C273.3 29.61 277.4 29.5 273.22 26.99V13.23C271.57 15.11 270.92 15.83 270.29 16.57C249.42 40.86 228.38 64.96 200.11 81.21C199.9 81.33 199.86 81.75 199.73 82.04L199.84 81.96C196.31 82.1 193.64 84.14 190.87 85.98L190.92 85.94C189.29 86.06 187.77 86.42 186.87 87.99H186.85C180.8 88.23 175.77 91.83 170.03 93.1C165.68 94.41 161.33 95.72 156.98 97.02C153.97 97.67 150.96 98.32 147.95 98.97C147.61 96.66 149.14 95.35 150.52 93.88C152.45 91.84 154.69 90.12 156.15 87.6C162.5 76.57 169.23 65.81 176.52 55.33C188.69 37.82 203.86 23.64 220.78 11.03C224.98 7.9 228.76 4.24 231.92 0L231.99 0.07ZM422.94 324.06C422.9 323.18 422.74 322.37 421.79 322.01C422.2 320.79 422.76 319.67 423.91 318.96C426.8 321.38 426.81 319.1 426.97 317.08C427.29 317.07 427.61 317.05 427.93 317.04C430.84 316.63 432.04 314.86 431.9 312.03C431.92 311.05 431.94 310.06 431.96 309.08C435.69 309.3 436.13 306.93 435.93 304.05C436.6 302.72 437.27 301.39 437.94 300.06C439.95 299.95 439.96 298.51 439.93 297.05L439.56 292.34L439.73 292C440.47 292.02 441.21 292.03 441.95 292.05C443.96 291.94 443.97 290.5 443.93 289.04C443.94 288.71 443.95 288.39 443.96 288.06C446.04 287.53 448.25 287.09 446.91 284.04C446.8 282.59 447.27 281.29 447.95 280.05C449.7 279.96 450.43 278.91 451.04 277.34C455.7 265.24 460.8 253.31 463.94 240.64C465.6 233.97 467.27 227.3 469.09 220.68C472.47 208.43 470.9 195.64 473.66 183.36C474.14 181.22 472.93 180.3 470.99 180.03C471.01 178.36 471.02 176.68 471.04 175.01C472.4 173.35 472.08 171.63 471.43 169.63C469.16 171.23 470.2 173.31 469.94 175.08C469.55 177.67 469.16 180.27 468.76 182.86C468.21 186.3 467.67 189.74 467.12 193.17C465.97 199.12 464.08 204.95 464.01 211.09C463.72 211.49 463.23 211.86 463.17 212.29C460.61 229.52 455.05 245.89 449.31 262.25C444.35 276.39 438.22 289.92 430.84 302.94C420.67 320.89 407.76 336.76 393.86 351.9C393.46 352.18 393 352.41 392.66 352.75C359.25 386.16 321.66 413.78 279.12 434.5C277.63 435.23 276.37 435.78 277.13 437.74C277.04 439 277.34 440.1 278.87 439.78C280.6 439.42 281.07 438.19 280.44 436.55L280.59 436.48C281.96 437.22 282.7 436.67 283.03 435.28C292.79 430.73 302.17 425.44 311.22 419.65C332.58 405.98 353.38 391.52 372.62 374.94C380.54 368.12 388.41 361.23 395.08 353.1C395.65 352.72 396.22 352.33 396.79 351.95C399.3 352.29 400.24 351.16 399.82 348.74C400.08 348.45 400.35 348.16 400.61 347.87C403.16 348.18 404.54 347.49 403.4 344.63L403.5 344.48C407.78 344.75 408.97 342.28 408.74 338.55C409.27 337.94 409.79 337.33 410.32 336.72C414.16 336.49 416.35 334.89 415.33 330.64L415.47 330.42C419.04 332.08 419.44 328.66 420.94 327.01C422.97 326.94 422.96 325.49 422.96 324.04L422.94 324.06ZM110.03 601.05C110.36 601.38 110.69 601.72 111.03 602.05C111.53 605.03 113.89 606.44 116.04 608.04C117.37 609.38 118.7 610.71 120.03 612.05C122.06 617.13 126.99 619.81 130.03 624.05C130.12 625.95 131.12 626.94 133.01 627.07C133.04 627.89 133.24 628.62 134.03 629.05C134.12 631.06 135.42 632.17 137.03 633.05C139.12 637.13 140.05 642.06 145.01 644.06C147.74 652.18 152.93 658.95 157 666.34C162.51 676.34 167.67 686.49 171.56 697.37C176.35 710.78 181.83 723.94 186.42 737.45C190.76 750.22 193.15 763.41 195.94 776.52C196.71 780.11 198.45 783.29 199.16 786.93C200.59 794.18 202.71 801.3 204.66 808.44C206.69 815.89 209.26 823.22 210.88 830.75C217.31 860.79 224.13 890.76 228.23 921.24C229.84 933.18 231.67 945.09 232.05 957.18C232.2 961.93 232.99 966.66 233.48 971.41C234.06 971.32 234.65 971.23 235.23 971.14C232.1 901.04 221 832.11 203.99 764.03C202.45 756.94 201.23 749.75 199.3 742.77C191.85 715.82 184.12 688.96 171 664.04C165.58 652.72 159.6 641.7 152.95 631.05C153.08 629.55 151.64 629.05 151.01 628.04C150.99 626.61 150.29 625.62 149.03 625.01C143.47 615.52 137.94 606 130.22 598.02C123.14 587.23 114.77 577.56 105.09 569.02C98.5404 562.06 91.7004 555.45 82.9904 551.16C81.0804 549.9 79.0904 548.8 77.2204 547.43C68.8504 541.25 59.1104 543.25 53.7404 551.97C53.4404 552.66 53.1504 553.34 52.8504 554.03C52.5904 554.7 52.3204 555.37 52.0604 556.04C51.6504 558.54 53.1504 560.28 54.9304 561.33C60.0504 564.37 65.1704 567.49 71.0104 569.06C73.7904 573.7 78.8504 575.27 83.0404 578.02C83.3704 578.03 83.6904 578.04 84.0204 578.05C84.0804 579.34 84.7404 580 86.0304 580.04C86.3604 580.04 86.6804 580.05 87.0104 580.06C90.3004 585.2 95.1304 588.65 100.03 592.03C100.99 593.74 102.33 595.07 104.04 596.03C105.26 598.62 107.98 599.43 110.02 601.05H110.03ZM41.0004 576.01L40.1104 577C40.2604 578.13 39.9904 579.68 40.6404 580.32C44.3204 584.02 47.9604 587.95 52.8404 590.04C71.2204 597.91 86.6204 610.1 100.96 623.62C114.62 636.5 126.47 650.87 136.77 666.75C145.06 679.53 152.61 692.58 159.16 706.28C165.84 720.27 172.8 734.12 179.51 748.1C183.09 755.55 186.4 763.13 189.84 770.65C190.73 765.91 189.38 761.67 188.21 757.48C182.8 738.13 176.77 718.98 168.97 700.44C166.04 693.46 164.39 685.85 159.06 680.02C154.82 667.73 147.47 657.12 140.66 646.24C136.66 639.84 132.93 633.16 127.2 628C123.22 622.97 119.55 617.65 115.18 613C109.91 607.39 105 601.31 98.4403 597.01C91.4403 591.62 85.9404 584.39 77.9104 580.26C70.8804 574.88 63.4904 570.2 54.5804 568.61C48.5904 567.54 43.7504 570.22 41.0004 576.01ZM79.0704 611.97L79.1104 612.01C69.4404 602.63 57.8804 596.4 45.3704 591.76C42.8104 590.81 40.1104 590.75 37.5104 591.1C33.9904 591.57 30.8104 592.87 30.0304 597C29.1104 596.68 28.6404 597.25 28.2004 597.9C28.0304 599.07 27.8504 600.25 29.0304 601.07C30.8004 609.3 38.3504 611.26 44.4004 613.64C52.7804 616.93 60.1404 621.87 67.5304 626.52C74.4304 630.86 81.5904 635.2 87.4804 641.19C95.1104 648.96 103.33 656.14 110.5 664.39C117.42 672.36 123.37 680.98 129.38 689.64C137.6 701.48 144.83 713.83 151.31 726.66C154.65 733.29 157.9 739.97 161.33 746.55C167.89 759.14 174.06 771.89 179.29 785.12C185.8 801.62 191.56 818.29 195.89 835.53C199.59 850.3 203.66 864.97 206.82 879.88C208.46 887.63 210.9 895.28 211.81 903.11C213.02 913.62 214.74 924.08 216.4 934.47C218.71 948.9 219.52 963.39 221.02 977.86C222.21 989.25 223.1 1000.64 223.02 1012.1C223.02 1012.97 222.68 1014.22 224.28 1014.29C225.4 1013.2 225 1011.79 224.95 1010.54C224.32 993.79 223.91 977.03 222.82 960.31C222.32 952.57 221.55 944.81 220.73 937.08C219.42 924.76 217.71 912.48 215.94 900.21C214.07 887.29 212.18 874.36 209.84 861.51C207.51 848.66 204.86 835.85 201.88 823.14C199.59 813.36 198.46 803.22 194.01 794.01C193.53 792.09 193.18 790.12 192.54 788.25C186.99 772.17 178.49 757.44 171.46 742.03C166.22 730.54 160.85 719.11 155.27 707.78C150.07 697.23 145.42 686.35 138.06 676.99C136.72 674.72 135.39 672.45 134.05 670.18C128.65 661.09 122.94 652.24 115.05 645.04C109.01 637.03 101.95 629.92 94.4504 623.36C90.6404 620.03 87.5403 615.59 82.3803 613.93C81.4603 612.93 80.5404 611.94 79.0304 611.93L79.0704 611.97ZM67.0704 632.97L67.1104 633.01C55.8504 623.34 42.6304 617.62 28.3504 614.33C22.2804 612.93 17.8504 615.61 14.9104 621.04C13.9304 621.79 14.1304 622.48 15.0204 623.13C15.3304 625.56 17.2504 626.67 18.9504 628C25.6704 633.26 34.0304 635.18 41.4104 639.08C50.0104 643.63 59.2204 647.33 67.0504 652.95C82.3704 663.97 96.1804 676.8 108.16 691.55C117.88 703.52 127.44 715.64 134.55 729.32C143.16 745.89 153.62 761.39 160.98 778.75C165.4 789.18 170.52 799.47 174.67 810.03C180.78 825.58 185.93 841.49 189.12 858.01C191.59 870.79 195.71 883.27 197.78 896.1C199.82 908.77 203.03 921.2 204.6 933.96C205.87 944.3 207.15 954.63 208.03 965.01C208.44 969.81 208.99 974.59 209.52 979.88C211.68 978.07 211.04 976.28 210.96 974.8C210.25 961.08 208.62 947.45 207.13 933.8C205.64 920.15 203.71 906.57 201.46 893.04C198.54 875.42 195.22 857.86 191.02 840.49C186.89 823.41 183.27 806.17 176.02 790.02C174.21 785.26 172.9 780.29 170.04 775.98C169.7 774.99 169.36 774 169.01 773.01C165.83 762.46 159.37 753.49 154.85 743.58C145.63 723.4 135.19 703.93 121.98 686.04C121.24 685.18 120.46 684.35 119.76 683.45C112.59 674.32 106.61 664.18 97.1604 657.01C93.2104 651.89 88.3604 647.72 83.3404 643.7C79.2704 640.44 75.7004 636.47 70.4604 634.95C69.5104 633.98 68.5904 632.96 67.0804 632.96L67.0704 632.97ZM198.5 1008.3L199.39 1008.28V992.73C199.09 992.73 198.8 992.75 198.5 992.75V1008.29V1008.3ZM211.03 996.29C212.12 992.75 212.48 989.21 210.97 985.73C209.62 989.24 209.77 992.76 211.03 996.29ZM267.88 702.16C269.29 700.14 269.2 698.87 268.12 697.33C266.51 698.78 266.9 700.08 267.88 702.16Z" fill="white"/>
    </svg>
    
}