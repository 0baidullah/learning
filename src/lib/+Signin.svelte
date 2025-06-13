<script>
  import Nohesi from "../lib/assets/static/NO HESI.png";
  import Logo from "../lib/assets/static/Vector1.png";
  import Google from "../lib/assets/static/google.png";
  import Dis from "../lib/assets/static/discord.png";
  import Magic from "../lib/assets/static/magic.png";
  import Envelop from "../lib/assets/static/Envelope.png";
  import Lock from "../lib/assets/static/LockKey.png";
  import In from "../lib/+input.svelte";
  import InputField from "../lib/+input.svelte";
</script>

<div class="layout">
  <div class="card">
    <div class="logo">
      <img src={Logo} alt="Logo" />
      <img src={Nohesi} alt="Nohesi" />
    </div>
    <div class="data">
      <div class="one">login for the best experience</div>
      <div class="two">
        <button class="butn">
          <img class="w-5 h-5" src={Google} alt="Google" />
          <i class=" text-sm"> LOGIN VIA GOOGLE</i>
        </button>
        <button class="butn">
          <img class="w-5 h-5" src={Dis} alt="Google" />
          <i class=" text-sm"> LOGIN VIA DISCORD</i>
        </button>
        <button class="butn">
          <img class="w-5 h-5" src={Magic} alt="Google" />
          <i class=" text-sm"> LOGIN VIA MAGIC LINK</i>
        </button>
      </div>
      <div class="three">
        <span></span>
        <p class="text-gray-400">or signin with email</p>
        <span></span>
      </div>
      <div class="">
        <InputField placeholder="Email" icon={Envelop} label="Email" />
        <InputField placeholder="Password" label="Password" icon={Lock} />
      </div>
      <div>
        <button
          class="butn"
          style="background: linear-gradient(0deg, #8800F0, #8800F0),
linear-gradient(98.82deg, rgba(91, 0, 240, 0) 0%, rgba(136, 0, 240, 0) 100%);
border:none;
"
        >
          <i class=" text-sm"> SIGN IN</i>
        </button>
      </div>
      <div>
        <div class="three text-gray-400">
          <p class="text-gray-400">Don't have an account?</p>
          <a href="/Signup" class="underline text-sm text-gray-400">Sign Up</a>
        </div>
      </div>
    </div>
    <div class="text-gray-400">
      <p>
        By signing in, you agree to our <a href="/terms" class="underline"
          >Terms of Service</a
        >
        and acknowlege having read our
        <a href="/privacy" class="underline">Privacy Policy</a>.
      </p>
    </div>
  </div>
</div>

<style>
  .layout {
    background: rgb(14, 12, 16);
    height: 100vh;
    width: 476px;
    padding: 30px 36px 30px 36px;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 16px;
    height: 100%;

    backdrop-filter: blur(128px);
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .data {
    margin-top: 58px;
    margin-bottom: 58px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }

  .one {
    width: 404px;
    height: 72px;

    background: rgb(14, 12, 16);

    font-family: "Roboto Flex";
    font-style: normal;
    font-weight: 900;
    font-size: 27px;
    line-height: 36px;
    text-transform: uppercase;

    /* Light-surface/Content/Primary */
    color: #eeedee;
    font-variation-settings:
      "GRAD" 150,
      "slnt" 0,
      "XTRA" 603,
      "XOPQ" 96,
      "YOPQ" 79,
      "YTLC" 514,
      "YTUC" 712,
      "YTAS" 750,
      "YTDE" -203,
      "YTFI" 738,
      "opsz" 110;
    /* Inside auto layout */
  }

  .two {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 404px;
  }

  .butn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    font-family: "Roboto Flex";
    font-weight: 500;
    color: aliceblue;
    height: 52px;
    border-radius: 8px;
    cursor: pointer;
    border: 1px gray solid;
  }

  .butn i {
    font-family: "Roboto Flex";
    font-weight: 500;
    color: white;
    font-size: 16px;
    font: bold;
    font-weight: 700;
  }

  .three {
    color: white;
  }

  .three {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-family: "Roboto Flex";
  }
  .three p {
    font-family: "Roboto Flex";
    color: white;
    font-size: 14px;
    font-weight: 50;
    color: rgba(253, 242, 242, 0.929);
  }

  .three span {
    width: 131px;
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
  }

  /* outline */
</style>
