<script>
  import img1 from "../lib/assets/static/download.jpeg";
  console.log(window.innerWidth, window.innerHeight);
</script>

<div
  class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-2 px-4 sm:px-8"
>
  <!-- Card Start -->
  <div class="w-full border-2 border-red-800 rounded-lg px-2 py-2">
    <div class="h-48 border-2 border-black-800 rounded-lg overflow-hidden">
      <img
        src={img1}
        alt="img1"
        class="w-full h-full object-cover rounded-t-lg"
      />
    </div>
    <div class="mt-2 border-2 border-green-800 rounded-lg p-2 space-y-2">
      <div class="flex justify-around border-2 border-red-800 rounded-lg p-1">
        <button class="bg-blue-500 text-white px-4 rounded">-</button>
        <button class="bg-yellow-500 text-white px-4 rounded"
          >Add to cart</button
        >
        <button class="bg-blue-500 text-white px-4 rounded">+</button>
      </div>
      <div
        class="border-2 border-yellow-800 rounded-lg overflow-hidden p-1 text-sm"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          magnam! Facere odit repudiandae numquam dolor.
        </p>
      </div>
    </div>
  </div>
  <!-- Card End -->

  <!-- Repeat 3 more cards -->
  <div class="w-full border-2 border-red-800 rounded-lg px-2 py-2">
    <div class="h-48 border-2 border-black-800 rounded-lg overflow-hidden">
      <img
        src={img1}
        alt="img1"
        class="w-full h-full object-cover rounded-t-lg"
      />
    </div>
    <div class="mt-2 border-2 border-green-800 rounded-lg p-2 space-y-2">
      <div class="flex justify-around border-2 border-red-800 rounded-lg p-1">
        <button class="bg-blue-500 text-white px-4 rounded">-</button>
        <button class="bg-yellow-500 text-white px-4 rounded"
          >Add to cart</button
        >
        <button class="bg-blue-500 text-white px-4 rounded">+</button>
      </div>
      <div
        class="border-2 border-yellow-800 rounded-lg overflow-hidden p-1 text-sm"
      >
        <p>Aliquam molestias repellendus quos dolore doloribus cumque est.</p>
      </div>
    </div>
  </div>

  <div class="w-full border-2 border-red-800 rounded-lg px-2 py-2">
    <div class="h-48 border-2 border-black-800 rounded-lg overflow-hidden">
      <img
        src={img1}
        alt="img1"
        class="w-full h-full object-cover rounded-t-lg"
      />
    </div>
    <div class="mt-2 border-2 border-green-800 rounded-lg p-2 space-y-2">
      <div class="flex justify-around border-2 border-red-800 rounded-lg p-1">
        <button class="bg-blue-500 text-white px-4 rounded">-</button>
        <button class="bg-yellow-500 text-white px-4 rounded"
          >Add to cart</button
        >
        <button class="bg-blue-500 text-white px-4 rounded">+</button>
      </div>
      <div
        class="border-2 border-yellow-800 rounded-lg overflow-hidden p-1 text-sm"
      >
        <p>Facere odit repudiandae numquam, dolor perspiciatis labore harum.</p>
      </div>
    </div>
  </div>

  <div class="w-full border-2 border-red-800 rounded-lg px-2 py-2">
    <div class="h-48 border-2 border-black-800 rounded-lg overflow-hidden">
      <img
        src={img1}
        alt="img1"
        class="w-full h-full object-cover rounded-t-lg"
      />
    </div>
    <div class="mt-2 border-2 border-green-800 rounded-lg p-2 space-y-2">
      <div class="flex justify-around border-2 border-red-800 rounded-lg p-1">
        <button class="bg-blue-500 text-white px-4 rounded">-</button>
        <button class="bg-yellow-500 text-white px-4 rounded"
          >Add to cart</button
        >
        <button class="bg-blue-500 text-white px-4 rounded">+</button>
      </div>
      <div
        class="border-2 border-yellow-800 rounded-lg overflow-hidden p-1 text-sm"
      >
        <p>Ex a. Officia quasi error architecto repudiandae at!</p>
      </div>
    </div>
  </div>
</div>

<div class="outer">
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
</div>

<div class="layout">
  <div class="header"></div>
  <div class="sidebar"></div>
  <div class="content"></div>
  <div class="footer"></div>
</div>

<div class="laout2">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="laout3">
    <div class="content">Content</div>
    <div class="content">Content</div>
    <div class="content">Content</div>
    <div class="content1">Content1</div>
    <div class="content1">Content1</div>
    <div class="content1">Content1</div>
  </div>
  <div class="footer">Footer</div>
</div>

<style>
.laout2{
  display: grid;
  grid-template-areas: 
    "header header header header"
    "sidebar content content content"
    "sidebar content1 content1 content1"
    "footer footer footer footer";
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto auto auto auto;
}

  .layout {
    display: grid;
    grid-template-areas:
      "header header header header "
      "sidebar content content content"
      "footer footer footer footer ";
    grid-template-columns: 1fr 3fr;
    grid-template-rows:
      auto 1fr auto ;
    height: 100vh;
  }

  .header {
    grid-area: header;
    background-color: #0e81f4;
    padding: 20px;
    text-align: center;
  }

  .sidebar {
    grid-area: sidebar;
    background-color: #e9efe9;
    padding: 20px;
  }
  .content {
    grid-area: content;
    background-color: #fdf916;
    padding: 20px;
  }
  .content1 {
    grid-area: content1;
    background-color: #16fd1e;
    padding: 20px;
  }

  .footer {
    grid-area: footer;
    background-color: #f50000;
    padding: 20px;
    text-align: center;
  }

  .outer {
    margin: 15px;
    display: grid;

    grid-template-columns: repeat(4, 25%);

    @media (max-width: 1024px) {
      grid-template-columns: repeat(4, 25%);
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 50%);
    }
    @media (max-width: 480px) {
      grid-template-columns: repeat(1, 100%);
    }
    @media (max-width: 320px) {
      grid-template-columns: repeat(1, 100%);
    }
  }
  .card {
    /* width: 340px; */
    height: 640px;
    background-color: #151010;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    border: 2px solid #ffffff;
  }
</style>
