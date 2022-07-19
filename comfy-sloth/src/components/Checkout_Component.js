

export const Checkout_Component = ({username,totalCart}) => {

  return (
    <>
      <center>
        <div style={{ marginTop: '4%' }}>
          <h1>Hello, {username}</h1>
          <p>Your total is ${totalCart}</p>
          <p>Test Card Number: 4242 4242 4242 4242</p>



          <form id="Checkout_payment_form">
            <div id="card_element" className="StripeElement StripeElement--empty">
              <div className="__PrivateStripeElement" style={{ margin: '0px !important', padding: '0px !important', border: 'none !important', display: 'block !important', background: 'transparent !important', position: 'relative !important', opacity: '1 !important' }}>
                <iframe name="__privateStripeFrame5846" frameBorder={0} allowTransparency="true" scrolling="no" allow="payment *" src="https://js.stripe.com/v3/elements-inner-card-9e79fa01e706190b2bdf90696f5e75ae.html#wait=false&mids[guid]=7884f67b-daf5-47b7-ac00-f2bf027f384dd88890&mids[muid]=5d520979-4ae2-4dba-9d07-514b1bcfb742a02b6c&mids[sid]=11e395d7-67c8-43d3-b287-ae5dd697fa7ea6d417&style[base][color]=%2332325d&style[base][fontFamily]=Arial%2C+sans-serif&style[base][fontSmoothing]=antialiased&style[base][fontSize]=16px&style[base][::placeholder][color]=%2332325d&style[invalid][color]=%23fa755a&style[invalid][iconColor]=%23fa755a&rtl=false&componentName=card&keyMode=test&apiKey=pk_test_51I87djFp5pnuKUXgBVIHiR36vVAWyfuyb7ckrhgyDNA1kM0GWHas9ZGUAgwJSFNUxrbyE6NwlMNmls1iGSfzHDdE00DQB3y6AH&referrer=https%3A%2F%2Freact-course-comfy-sloth-store.netlify.app%2Fcheckout&controllerId=__privateStripeController5841" title="Secure card payment input frame" style={{ border: 'none !important', margin: '0px !important', padding: '0px !important', width: '1px !important', minWidth: '100% !important', overflow: 'hidden !important', display: 'block !important', userSelect: 'none !important', transform: 'translate(0px) !important', colorScheme: 'light only !important', height: '19.2px' }} />
              </div>
            </div>
            <button disabled id="submit">
              <span id="button-text">Pay</span>
            </button>
          </form>
        </div>
      </center>

    </>
  )
}