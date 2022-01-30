import React from 'react';
import "./payment.css";

const Payment = () => {
  return <div><div class="wrapper">
  <h4 class="text-uppercase">Payment Details</h4>
  <form class="form mt-4">
      <div class="form-group"> <label for="name" class="text-uppercase">name on the card</label> <input type="text" class="form-control" placeholder="Nicolos Flemming"/> </div>
      <div class="form-group"> <label for="card" class="text-uppercase">card number</label>
          <div class="card-number"> <input type="text" class="card-no" step="4" placeholder="1234 4567 5869 1234" pattern="^[0-9].{15,}"/> <span class=""> <img src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-marcus-samuelsson-group-2.png" alt="" width="30" height="30"/> </span> </div>
      </div>
      <div class="d-flex w-100">
          <div class="d-flex w-50 pr-sm-4">
              <div class="form-group"> <label for="expiry" class="text-uppercase">exp.date</label> <input type="text" class="form-control" placeholder="03/2020"/> </div>
          </div>
          <div class="d-flex w-50 pl-sm-5 pl-3">
              <div class="form-group"> <label for="cvv">CVV</label> <a href="#" title="CVV is a credit or debit card number, the last three digit number printed on the signature panel"></a> <input type="password" class="form-control pr-5" maxlength="3" placeholder="123"/> </div>
          </div>
      </div>
      <div class="form-inline pt-sm-3 pt-2"> <input type="checkbox" name="address" id="address"/> <label for="address" class="px-sm-1 pl-1 pt-sm-0 pt-2">My billing address is the same as the shipping</label> </div>
      <div class="form-inline py-sm-2"> <input type="checkbox" name="details" id="details"/> <label for="details" class="px-sm-2 pl-2 pt-sm-0 pt-2">Save my details for future purchases</label> </div>
      <div class="my-3"> <input type="submit" value="place your order" class="text-uppercase btn btn-primary btn-block p-3"/> </div>
      <div id="form-footer">
          <p>By placing your order, you agree to our</p>
          <p><a href="#">privacy notice</a> & <a href="#">terms of use</a>.</p>
      </div>
  </form>
</div>
</div>;
};

export default Payment;
