<script>
  let bill, tipPercentage, numberOfPeople
  let tipAmountPerPerson = 0.0
  let totalAmountPerPerson = 0.0

  const setTipPercentage = (event) => {
    tipPercentage = Number(event.target.value)
  }

  const calculateTipAmountPerPerson = (bill, tipPercentage, numberOfPeople) => {
    return Number(((bill * tipPercentage) / numberOfPeople).toFixed(2))
  }

  const calculateTotalAmountPerPerson = (
    bill,
    tipPercentage,
    numberOfPeople
  ) => {
    return Number(((bill + bill * tipPercentage) / numberOfPeople).toFixed(2))
  }

  const resetValues = () => {
    bill = null
    tipPercentage = null
    numberOfPeople = null
  }

  $: {
    if (bill && tipPercentage && numberOfPeople) {
      tipAmountPerPerson = calculateTipAmountPerPerson(
        bill,
        tipPercentage,
        numberOfPeople
      )
      totalAmountPerPerson = calculateTotalAmountPerPerson(
        bill,
        tipPercentage,
        numberOfPeople
      )
    } else {
      tipAmountPerPerson = 0.0
      totalAmountPerPerson = 0.0
    }
  }
</script>

<main>
  <div class="flex flex-col items-center md:px-5">
    <img src="/assets/logo.svg" alt="logo" class="py-12 md:pt-0" />
    <div
      class="bg-white px-5 py-8 md:p-8 rounded-t-3xl md:rounded-3xl md:w-full md:max-w-4xl md:mx-auto"
    >
      <div class="md:grid md:grid-cols-2 md:items-center md:gap-8">
        <!-- grid 1 -->
        <div>
          <!-- bill -->
          <div class="flex flex-col gap-1 relative">
            <label
              for="bill"
              class="text-base font-bold text-cstm-neutral-dark-grayish-cyan-one"
              >Bill</label
            >
            <input
              type="number"
              id="bill"
              bind:value={bill}
              step="0.01"
              min="0.01"
              placeholder="0.00"
              class="bg-cstm-neutral-light-grayish-cyan-two text-right font-bold text-cstm-neutral-dark-cyan rounded-md py-2 px-4 focus:outline focus:outline-2 focus:outline-cstm-primary-strong-cyan"
            />
            <img
              src="/assets/icon-dollar.svg"
              alt="dollar icon"
              class="absolute bottom-4 left-4"
            />
          </div>

          <!-- tip selection -->
          <div class="mt-10">
            <p
              class="text-base font-bold text-cstm-neutral-dark-grayish-cyan-one mb-3"
            >
              Select Tip %
            </p>
            <ul class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <li
                class="bg-cstm-neutral-dark-cyan text-white hover:bg-cstm-neutral-light-grayish-cyan-one hover:text-cstm-neutral-dark-cyan rounded-md w-full relative"
              >
                <label
                  for="five_percent"
                  class="font-bold cursor-pointer absolute text-center w-full checked:bg-red-500"
                  >5%</label
                >
                <input
                  type="radio"
                  id="five_percent"
                  value="0.05"
                  name="tip_percentage"
                  class="invisible"
                  checked={tipPercentage === '0.05'}
                  on:change={setTipPercentage}
                />
              </li>
              <li
                class="bg-cstm-neutral-dark-cyan text-white hover:bg-cstm-neutral-light-grayish-cyan-one hover:text-cstm-neutral-dark-cyan rounded-md w-full relative"
              >
                <label
                  for="ten_percent"
                  class="font-bold cursor-pointer absolute text-center w-full checked:bg-red-500"
                  >10%</label
                >
                <input
                  type="radio"
                  id="ten_percent"
                  value="0.10"
                  name="tip_percentage"
                  class="invisible"
                  checked={tipPercentage === '0.10'}
                  on:change={setTipPercentage}
                />
              </li>
              <li
                class="bg-cstm-neutral-dark-cyan text-white hover:bg-cstm-neutral-light-grayish-cyan-one hover:text-cstm-neutral-dark-cyan rounded-md w-full relative"
              >
                <label
                  for="fifteen_percent"
                  class="font-bold cursor-pointer absolute text-center w-full checked:bg-red-500"
                  >15%</label
                >
                <input
                  type="radio"
                  id="fifteen_percent"
                  value="0.15"
                  name="tip_percentage"
                  class="invisible"
                  checked={tipPercentage === '0.15'}
                  on:change={setTipPercentage}
                />
              </li>
              <li
                class="bg-cstm-neutral-dark-cyan text-white hover:bg-cstm-neutral-light-grayish-cyan-one hover:text-cstm-neutral-dark-cyan rounded-md w-full relative"
              >
                <label
                  for="twenty_five_percent"
                  class="font-bold cursor-pointer absolute text-center w-full checked:bg-red-500"
                  >25%</label
                >
                <input
                  type="radio"
                  id="twenty_five_percent"
                  value="0.25"
                  name="tip_percentage"
                  class="invisible"
                  checked={tipPercentage === '0.25'}
                  on:change={setTipPercentage}
                />
              </li>
              <li
                class="bg-cstm-neutral-dark-cyan text-white hover:bg-cstm-neutral-light-grayish-cyan-one hover:text-cstm-neutral-dark-cyan rounded-md w-full relative"
              >
                <label
                  for="fifty_percent"
                  class="font-bold cursor-pointer absolute text-center w-full checked:bg-red-500"
                  >50%</label
                >
                <input
                  type="radio"
                  id="fifty_percent"
                  value="0.50"
                  name="tip_percentage"
                  class="invisible"
                  checked={tipPercentage === '0.50'}
                  on:change={setTipPercentage}
                />
              </li>
            </ul>
            <!-- <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <button
                on:click={() => setTipPercentage(0.05)}
                class="bg-cstm-neutral-dark-cyan text-white font-bold rounded-md py-1 hover:bg-cstm-neutral-light-grayish-cyan-one hover:text-black"
                >5%</button
              >
              <button
                on:click={() => setTipPercentage(0.1)}
                class="bg-cstm-neutral-dark-cyan text-white font-bold rounded-md py-1 hover:bg-cstm-neutral-light-grayish-cyan-one hover:text-black"
                >10%</button
              >
              <button
                on:click={() => setTipPercentage(0.15)}
                class="bg-cstm-neutral-dark-cyan text-white font-bold rounded-md py-1 hover:bg-cstm-neutral-light-grayish-cyan-one hover:text-black"
                >15%</button
              >
              <button
                on:click={() => setTipPercentage(0.25)}
                class="bg-cstm-neutral-dark-cyan text-white font-bold rounded-md py-1 hover:bg-cstm-neutral-light-grayish-cyan-one hover:text-black"
                >25%</button
              >
              <button
                on:click={() => setTipPercentage(0.5)}
                class="bg-cstm-neutral-dark-cyan text-white font-bold rounded-md py-1 hover:bg-cstm-neutral-light-grayish-cyan-one hover:text-black"
                >50%</button
              >
              <button
                class="bg-cstm-neutral-light-grayish-cyan-two rounded-md font-bold text-cstm-neutral-dark-grayish-cyan-one"
                >Custom</button
              >
            </div> -->
          </div>

          <!-- number of people -->
          <div class="mt-10 flex flex-col gap-1 relative">
            <label
              for="people"
              class="text-base font-bold text-cstm-neutral-dark-grayish-cyan-one"
              >Number of People</label
            >
            <input
              type="number"
              id="people"
              bind:value={numberOfPeople}
              min="1"
              placeholder="0"
              class="bg-cstm-neutral-light-grayish-cyan-two text-right font-bold text-cstm-neutral-dark-cyan rounded-md py-2 px-4 focus:outline focus:outline-2 focus:outline-cstm-primary-strong-cyan"
            />
            <img
              src="/assets/icon-person.svg"
              alt="person icon"
              class="absolute bottom-4 left-4"
            />
          </div>
        </div>

        <!-- grid 2 -->
        <div class="md:bg-cstm-neutral-dark-cyan md:rounded-2xl md:h-full">
          <!-- amount summary -->
          <div
            class="bg-cstm-neutral-dark-cyan p-5 md:p-10 rounded-2xl mt-10 md:mt-0 md:flex md:flex-col md:justify-between md:h-full"
          >
            <div class="space-y-6">
              <div class="flex justify-between items-center font-bold">
                <p class="text-cstm-neutral-light-grayish-cyan-two text-base">
                  Tip Amount <br />
                  <span class="text-cstm-neutral-dark-grayish-cyan-two text-sm"
                    >/ person</span
                  >
                </p>
                <p class="text-cstm-primary-strong-cyan text-3xl md:text-5xl">
                  ${tipAmountPerPerson.toFixed(2)}
                </p>
              </div>
              <div class="flex justify-between items-center font-bold">
                <p class="text-cstm-neutral-light-grayish-cyan-two text-base">
                  Total <br /><span
                    class="text-cstm-neutral-dark-grayish-cyan-two text-sm"
                    >/ person</span
                  >
                </p>
                <p class="text-cstm-primary-strong-cyan text-3xl md:text-5xl">
                  ${totalAmountPerPerson.toFixed(2)}
                </p>
              </div>
            </div>
            <button
              on:click|preventDefault={resetValues}
              class="bg-cstm-primary-strong-cyan hover:bg-cstm-neutral-light-grayish-cyan-one font-bold w-full rounded-md py-1 uppercase mt-8 md:mt-0"
              >Reset</button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
