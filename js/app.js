const products = [
  {
    id: 1,
    title:
      "لپ تاپ 15.6 اینچی لنوو مدل IdeaPad Slim 3 15IRH8-i7 13620H 16GB 512SSD",
    price: 32000000,
    img: "./public/images/products/image01.png",
    description:
      "این لپ‌تاپ لنوو با پردازنده‌ی قدرتمند i7 نسل ۱۳ و ۱۶ گیگابایت رم، مناسب برای کارهای روزمره و سنگین. حافظه ۵۱۲ گیگابایتی SSD عملکرد سریعی را فراهم می‌کند.",
  },
  {
    id: 2,
    title:
      "لپ تاپ 14 اینچی ایسوس مدل VivoBook R465FA - Core i5 1135G7 8GB 256SSD",
    price: 27000000,
    img: "./public/images/products/image02.png",
    description:
      "لپ‌تاپ اقتصادی ایسوس با پردازنده i5 نسل ۱۱، دارای ۸ گیگابایت رم و ۲۵۶ گیگابایت حافظه SSD، مناسب برای استفاده روزمره و سبک.",
  },
  {
    id: 3,
    title: "لپ تاپ 13.3 اینچی اپل مدل MacBook Air 2020 M1 8GB 256SSD",
    price: 55000000,
    img: "./public/images/products/image03.png",
    description:
      "مک‌بوک ایر با پردازنده M1 و ۸ گیگابایت رم، ایده‌آل برای کاربران حرفه‌ای اپل که به دنبال سرعت و عملکرد بالا در یک بدنه سبک هستند.",
  },
  {
    id: 4,
    title: "لپ تاپ 16 اینچی اچ‌پی مدل Envy x360 - Ryzen 7 5700U 16GB 512SSD",
    price: 47000000,
    img: "./public/images/products/image04.png",
    description:
      "لپ‌تاپ تبدیل‌پذیر اچ‌پی با پردازنده Ryzen 7 و ۱۶ گیگابایت رم، مناسب برای کارهای گرافیکی و مالتی‌مدیا. صفحه‌نمایش ۱۶ اینچی و کیفیت ساخت عالی.",
  },
  {
    id: 5,
    title: "لپ تاپ 15.6 اینچی دل مدل G5 15 SE - Ryzen 5 4600H 8GB 512SSD",
    price: 36000000,
    img: "./public/images/products/image05.png",
    description:
      "لپ‌تاپ گیمینگ دل با پردازنده Ryzen 5 و ۸ گیگابایت رم، مناسب برای گیمرها و کاربران حرفه‌ای که به دنبال عملکرد قوی هستند.",
  },
  {
    id: 6,
    title:
      "لپ تاپ 15.6 اینچی ایسر مدل Nitro 5 AN515-45 - Ryzen 7 5800H 16GB 1TB SSD",
    price: 54000000,
    img: "./public/images/products/image06.png",
    description:
      "یک لپ‌تاپ گیمینگ قدرتمند از ایسر با پردازنده Ryzen 7 و ۱۶ گیگابایت رم. دارای ۱ ترابایت حافظه SSD برای بازی‌های حجیم و اجرای سریع.",
  },
  {
    id: 7,
    title:
      "لپ تاپ 14 اینچی لنوو مدل ThinkPad X1 Carbon Gen 9 - Core i7 1165G7 16GB 1TB SSD",
    price: 62000000,
    img: "./public/images/products/image07.png",
    description:
      "لپ‌تاپ حرفه‌ای و باکیفیت از سری ThinkPad با پردازنده i7 و ۱۶ گیگابایت رم. مناسب برای کاربران تجاری و حرفه‌ای که به دنبال کیفیت ساخت بالا و امنیت هستند.",
  },
  {
    id: 8,
    title: "لپ تاپ 13.3 اینچی دل مدل XPS 13 - Core i7 1185G7 16GB 512SSD",
    price: 71000000,
    img: "./public/images/products/image08.png",
    description:
      "لپ‌تاپ دل XPS با طراحی زیبا و پردازنده i7، ۱۶ گیگابایت رم و صفحه‌نمایش باکیفیت، انتخابی عالی برای کاربران حرفه‌ای و علاقه‌مندان به تکنولوژی.",
  },
  {
    id: 9,
    title: "لپ تاپ 14 اینچی ایسوس مدل ZenBook 14 - Ryzen 5 5500U 8GB 512SSD",
    price: 38000000,
    img: "./public/images/products/image09.png",
    description:
      "لپ‌تاپ سبک و زیبا از سری ZenBook با پردازنده Ryzen 5 و ۸ گیگابایت رم. مناسب برای کارهای روزمره و سبک با باتری قوی.",
  },
  {
    id: 10,
    title:
      "لپ تاپ 15.6 اینچی ام‌اس‌آی مدل GF63 Thin 11SC - Core i5 11400H 16GB 512SSD",
    price: 46000000,
    img: "./public/images/products/image10.png",
    description:
      "لپ‌تاپ قدرتمند MSI با پردازنده i5 نسل ۱۱، ۱۶ گیگابایت رم و کارت گرافیک مناسب. گزینه‌ای عالی برای گیمرها و کاربران حرفه‌ای.",
  },
  {
    id: 11,
    title: "لپ تاپ 15.6 اینچی اچ‌پی مدل Pavilion 15 - Core i5 1235U 8GB 512SSD",
    price: 34000000,
    img: "./public/images/products/image11.png",
    description:
      "لپ‌تاپ اقتصادی اچ‌پی با پردازنده i5 نسل ۱۲، ۸ گیگابایت رم و ۵۱۲ گیگابایت حافظه SSD، مناسب برای استفاده‌های روزمره و تجاری.",
  },
  {
    id: 12,
    title: "لپ تاپ 16 اینچی اپل مدل MacBook Pro 2021 M1 Pro 16GB 1TB SSD",
    price: 85000000,
    img: "./public/images/products/image12.png",
    description:
      "مک‌بوک پرو با پردازنده M1 Pro و ۱۶ گیگابایت رم، مناسب برای کاربران حرفه‌ای اپل که به دنبال عملکرد بی‌نظیر در کارهای سنگین و حرفه‌ای هستند.",
  },
];

let basket = [];

const productsContainer = document.querySelector(".wrapper");
const basketProductsContainer = document.querySelector(".basket-main");
const openBasketBtn = document.querySelector(".open-basket");
const basketScreen = document.querySelector(".basket-screen");
const closeBasketBtn = document.querySelector(".close-basket");
const totalPriceElem = document.querySelector(".total-price");
const clearBasketButton = document.querySelector(".clear-button");
const productCountElem = document.querySelector(".count");
const productCountElemInBasket = document.querySelector(".products-count");

function showProducts() {
  products.forEach(function (product) {
    productsContainer.insertAdjacentHTML(
      "beforeend",
      `
        <article>
          <header class="product-header">
            <img
              src="${product.img}"
              class="product-img"
              alt=""
            />
          </header>
          <main class="product-body">
            <h3 class="product-title">
              ${product.title}
            </h3>
            <p class="desc">
              ${product.description}
            </p>
          </main>
          <footer class="product-footer">
            <p class="price">${product.price.toLocaleString()} ت</p>
            <button class="add-to-cart" onclick="addProductToBasket(${
              product.id
            })">
              <i class="bx bx-cart-alt"></i>
              افزودن به سبد
            </button>
          </footer>
        </article>
      `
    );
  });
}

function addProductToBasket(productID) {
  const mainProduct = products.find(function (product) {
    return product.id === productID;
  });

  const isProductInBasket = basket.some(function (product) {
    return product.id === mainProduct.id;
  });

  if (isProductInBasket) {
    increaseProductCount(mainProduct.id);
  } else {
    const basketNewProduct = {
      id: mainProduct.id,
      title: mainProduct.title,
      description: mainProduct.description,
      img: mainProduct.img,
      price: mainProduct.price,
      count: 1,
    };

    basket.push(basketNewProduct);
  }

  saveBasketInLocalStorage();
  calculateTotalPrice();
  showBasketProductsCount();
}

function saveBasketInLocalStorage() {
  localStorage.setItem("basket", JSON.stringify(basket));
}

function showBasketProducts() {
  basketScreen.classList.remove("hidden");

  basketProductsContainer.innerHTML = "";

  if (basket.length) {
    basket.forEach(function (product) {
      basketProductsContainer.insertAdjacentHTML(
        "beforeend",
        `
        <article class="basket-item">
          <div class="flex-center">
            <img src="${product.img}" alt="" />
            <div class="basket-item_details">
              <p class="basket-item_title">
                ${product.title}
              </p>
              <p class="basket-item_price">${product.price.toLocaleString()} ت</p>
            </div>
            <div>
              <div class="buttons">
                <button class="increase" onclick="increaseProductCount(${
                  product.id
                })">
                  <i class="bx bx-plus"></i>
                </button>
                <button class="remove-button" onclick="removeProductFromBasket(${
                  product.id
                })">
                  <!-- Boxicons trash icon -->
                  <i class="bx bx-trash"></i>
                </button>
                <button class="decrease" onclick="decreaseProductCount(${
                  product.id
                })">
                  <!-- Decrease icon -->
                  <i class="bx bx-minus"> </i>
                </button>
              </div>
              <div class="product-count-card">
                <span>تعداد:</span>
                <span class="product-count">${product.count}</span>
              </div>
            </div>
          </div>
        </article>
      `
      );
    });
  } else {
    basketProductsContainer.innerHTML = `
      <p class="empty-basket">
        سبد خرید شما خالی می باشد :(
      </p>`;
  }

  calculateTotalPrice();
  showBasketProductsCount();
}

function increaseProductCount(productID) {
  const productToIncreaseCount = basket.find(function (product) {
    return product.id === productID;
  });

  productToIncreaseCount.count += 1;

  saveBasketInLocalStorage();
  calculateTotalPrice();
  showBasketProducts();
}

function decreaseProductCount(productID) {
  const productToIncreaseCount = basket.find(function (product) {
    return product.id === productID;
  });

  productToIncreaseCount.count -= 1;

  if (!productToIncreaseCount.count) {
    const productToRemoveFromBasket = basket.findIndex(function (product) {
      return product.id === productID;
    });

    basket.splice(productToRemoveFromBasket, 1);
  }

  saveBasketInLocalStorage();
  calculateTotalPrice();
  showBasketProducts();
}

function hideBasket() {
  basketScreen.classList.add("hidden");
}

function getProductsFromLocalStorage() {
  const localBasket = JSON.parse(localStorage.getItem("basket"));

  if (localBasket) {
    basket = localBasket;
  }

  showProducts();
  showBasketProductsCount();
}

function calculateTotalPrice() {
  let totalPrice = 0;

  basket.forEach(function (product) {
    totalPrice += product.price * product.count; // 1 -> product.count
  });

  totalPriceElem.innerHTML = totalPrice.toLocaleString();
}

function clearBasket() {
  basket = [];
  saveBasketInLocalStorage();
  showBasketProducts();
  calculateTotalPrice();
  showBasketProductsCount();
}

function showBasketProductsCount() {
  productCountElem.innerHTML = basket.length;
  productCountElemInBasket.innerHTML = `(${basket.length})`;
}

function removeProductFromBasket(productID) {
  const mainProductIndex = basket.findIndex(function (product) {
    return product.id === productID;
  });

  basket.splice(mainProductIndex, 1);
  saveBasketInLocalStorage();
  calculateTotalPrice();
  showBasketProductsCount();
  showBasketProducts();
}

openBasketBtn.addEventListener("click", showBasketProducts);
closeBasketBtn.addEventListener("click", hideBasket);
clearBasketButton.addEventListener("click", clearBasket);
