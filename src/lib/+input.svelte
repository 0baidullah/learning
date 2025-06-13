<script>
  export let value = '';
  export let placeholder = '';
  export let name = 'input';
  export let label = 'Label';
  export let type = 'text'; // default to 'text'
  export let icon = '';     // optional image/icon path

  const handleInput = (event) => {
    value = event.target.value;
  };
</script>

<div class="input-container">
  <label for={name}>{label}</label>
  <div class="input-wrapper">
    {#if icon}
      <span class="icon">
        <img src={icon} alt="icon" class="icon-img" />
      </span>
    {:else}
      <slot name="icon" />
    {/if}

    <input
      type={type}
      bind:value
      id={name}
      name={name}
      placeholder={placeholder}
      class="input-field"
      on:input={handleInput}
    />
  </div>
</div>

<style>
  .input-container {
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: #ffffff;
    font-family: sans-serif;
    margin-bottom: 22px;
    margin-top: 22px;
  }

  label {
    font-size: 14px;
    color: #cbd5e0;
  }

  .input-wrapper {
    display: flex;
    align-items: center;
    /* border: 1px gray solid ; */
    border-radius: 6px;
    padding: 8px 12px;
    background-color: #1a1a1a;
      background: #121014;
  }

  .input-wrapper:focus-within {
    outline: 2px solid #a855f7;
    outline-offset: 1px;
  
  }

  .icon {
    display: flex;
    align-items: center;
    margin-right: 8px;
  }

  .icon-img {
    width: 20px;
    height: 20px;
    filter: brightness(0.8);
  }

  .input-field {
    border: none;
    outline: none;
    background: transparent;
    
    color: #ffffff;
    width: 100%;
    font-size: 16px;
    /* caret-color: #a855f7; */
        /* height: 52px; */

    
  }

  .input-field::placeholder {
    color: #a0aec0;
  }
</style>
