

const Answer = () => {
    return (
       <div className="my-6">
        <div>
            <h2 className="text-4xl mx-auto text-center font-bold">Frequently Asked Questions</h2>
        </div>
        <div className="flex gap-4 my-6">
        <div>
        <div className="join join-vertical w-full shadow-lg">
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" checked="checked" /> 
    <div className="collapse-title text-xl font-medium">
    What is mobile banking?
    </div>
    <div className="collapse-content"> 
      <p> Mobile banking is a service provided by banks that allows customers to perform financial transactions using a mobile device, such as a smartphone or tablet, through a dedicated app or mobile web browser.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    How secure is mobile banking?
    </div>
    <div className="collapse-content"> 
      <p>Mobile banking employs various security measures, including encryption, authentication methods, and secure channels. However, users should take precautions like using strong passwords and keeping their mobile devices secure to enhance overall safety.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    What transactions can I perform through mobile banking?
    </div>
    <div className="collapse-content"> 
      <p>Mobile banking typically allows users to check account balances, transfer funds, pay bills, deposit checks, and receive account alerts. The specific features may vary among banks and their mobile applications.</p>
    </div>
  </div>
</div>
        </div>
        <div>
        <div className="join join-vertical w-full shadow-lg">
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" checked="checked" /> 
    <div className="collapse-title text-xl font-medium">
    Can I use mobile banking on any smartphone?
    </div>
    <div className="collapse-content"> 
      <p>Most banks offer mobile banking apps that are compatible with popular smartphones like iPhones and Android devices. However, it's essential to check the specific requirements of your bank's app and ensure your device meets them.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    How can I set up mobile banking on my phone?
    </div>
    <div className="collapse-content"> 
      <p>To set up mobile banking, download your bank's official app from the app store, install it, and follow the registration or login process. Typically, this involves verifying your identity, creating a secure PIN or password, and linking your mobile device to your account.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    Are there fees associated with mobile banking?
    </div>
    <div className="collapse-content"> 
      <p> Many banks offer basic mobile banking services without additional charges. However, certain transactions or features may have associated fees, such as expedited transfers or international transactions. It's advisable to check with your bank to understand their fee structure for mobile banking services.</p>
    </div>
  </div>
</div>
        </div>
       </div>
       </div>
    );
};

export default Answer;