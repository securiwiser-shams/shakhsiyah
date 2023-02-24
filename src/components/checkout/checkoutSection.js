import React, { useReducer } from 'react';

const initialState = {
    isActive: true,
    isActiveA: true,
    isActiveB: true,
    isActiveC: true
}
const reducer = (state, action) => {
    switch (action) {
        case "returnCustomer":
            return {
                ...state,
                isActive: !state.isActive,
            };
        case "coupon":
            return {
                ...state,
                isActiveA: !state.isActiveA,
            };
        case "account":
            return {
                ...state,
                isActiveB: !state.isActiveB,
            };
        case "address":
            return {
                ...state,
                isActiveC: !state.isActiveC,
            };
        default:
            throw new Error("Unexpected action");
    }
};

const CheckoutSection = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <section className="coupon-area pt-100 pb-30">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="coupon-accordion">
                                <h3>Returning customer? <span id="showlogin" onClick={() => dispatch("returnCustomer")}>Click here to login</span></h3>
                                <div id="checkout-login" className={`coupon-content ${state.isActive ? "danger" : "d-block"}`}>
                                    <div className="coupon-info">
                                        <p className="coupon-text">Quisque gravida turpis sit amet nulla posuere lacinia. Cras
                                            sed est sit amet ipsum luctus.</p>
                                        <form action="#">
                                            <p className="form-row-first">
                                                <label>Username <span className="required">*</span></label>
                                                <input type="text" placeholder='Username' required />
                                            </p>
                                            <p className="form-row-last">
                                                <label>Password <span className="required">*</span></label>
                                                <input type="password" placeholder='Password' required />
                                            </p>
                                            <p className="form-row">
                                                <button className="edu-btn" type="submit">Login</button>
                                                <label>
                                                    <input type="checkbox" />
                                                    Remember me
                                                </label>
                                            </p>
                                            <p className="lost-password">
                                                <a href="#">Lost your password?</a>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="coupon-accordion">
                                <h3>Have a coupon? <span id="showcoupon" onClick={() => dispatch("coupon")}>Click here to enter your code</span></h3>
                                <div id="checkout_coupon" className={`coupon-checkout-content ${state.isActiveA ? "danger" : "d-block"}`}>
                                    <div className="coupon-info">
                                        <form action="#">
                                            <p className="checkout-coupon">
                                                <input type="text" placeholder="Coupon Code" />
                                                <button className="edu-btn" type="submit">Apply Coupon</button>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="checkout-area pb-70">
                <div className="container">
                    <form action="#">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="checkbox-form">
                                    <h3>Billing Details</h3>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="country-select">
                                                <label>Country <span className="required">*</span></label>
                                                <select>
                                                    <option defaultValue="volvo">bangladesh</option>
                                                    <option defaultValue="saab">Algeria</option>
                                                    <option defaultValue="mercedes">Afghanistan</option>
                                                    <option defaultValue="audi">Ghana</option>
                                                    <option defaultValue="audi2">Albania</option>
                                                    <option defaultValue="audi3">Bahrain</option>
                                                    <option defaultValue="audi4">Colombia</option>
                                                    <option defaultValue="audi5">Dominican Republic</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>First Name <span className="required">*</span></label>
                                                <input type="text" placeholder="First Name" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>Last Name <span className="required">*</span></label>
                                                <input type="text" placeholder="Last Name" required />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="checkout-form-list">
                                                <label>Company Name</label>
                                                <input type="text" placeholder="Company" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="checkout-form-list">
                                                <label>Address <span className="required">*</span></label>
                                                <input type="text" placeholder="Street address" required />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="checkout-form-list">
                                                <input type="text" placeholder="Apartment, suite, unit etc. (optional)" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="checkout-form-list">
                                                <label>Town / City <span className="required">*</span></label>
                                                <input type="text" placeholder="Town / City" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>State / County <span className="required">*</span></label>
                                                <input type="text" placeholder="State / County" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>Postcode / Zip <span className="required">*</span></label>
                                                <input type="text" placeholder="Postcode / Zip" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>Email Address <span className="required">*</span></label>
                                                <input type="email" placeholder="Email" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>Phone <span className="required">*</span></label>
                                                <input type="text" placeholder="Email" required />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="checkout-form-list create-acc">
                                                <label onClick={() => dispatch("account")}>Create an account?</label>
                                            </div>
                                            <div id="cbox_info" className={`checkout-form-list create-account ${state.isActiveB ? "danger" : "d-block"}`}>
                                                <p>Create an account by entering the information below. If you are a
                                                    returning customer please login at the top of the page.</p>
                                                <label>Account password <span className="required">*</span></label>
                                                <input type="password" placeholder="password" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="different-address">
                                        <div className="ship-different-title">
                                            <label onClick={() => dispatch("address")}>Ship to a different address?</label>
                                        </div>
                                        <div id="ship-box-info" className={`${state.isActiveC ? "danger" : "d-block"}`}>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="country-select">
                                                        <label>Country <span className="required">*</span></label>
                                                        <select>
                                                            <option defaultValue="volvo">bangladesh</option>
                                                            <option defaultValue="saab">Algeria</option>
                                                            <option defaultValue="mercedes">Afghanistan</option>
                                                            <option defaultValue="audi">Ghana</option>
                                                            <option defaultValue="audi2">Albania</option>
                                                            <option defaultValue="audi3">Bahrain</option>
                                                            <option defaultValue="audi4">Colombia</option>
                                                            <option defaultValue="audi5">Dominican Republic</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="checkout-form-list">
                                                        <label>First Name <span className="required">*</span></label>
                                                        <input type="text" placeholder="First Name" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="checkout-form-list">
                                                        <label>Last Name <span className="required">*</span></label>
                                                        <input type="text" placeholder="Last Name" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="checkout-form-list">
                                                        <label>Company Name</label>
                                                        <input type="text" placeholder="Company" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="checkout-form-list">
                                                        <label>Address <span className="required">*</span></label>
                                                        <input type="text" placeholder="Street address" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="checkout-form-list">
                                                        <input type="text"
                                                            placeholder="Apartment, suite, unit etc. (optional)" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="checkout-form-list">
                                                        <label>Town / City <span className="required">*</span></label>
                                                        <input type="text" placeholder="Town / City" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="checkout-form-list">
                                                        <label>State / County <span className="required">*</span></label>
                                                        <input type="text" placeholder="State / County" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="checkout-form-list">
                                                        <label>Postcode / Zip <span className="required">*</span></label>
                                                        <input type="text" placeholder="Postcode / Zip" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="checkout-form-list">
                                                        <label>Email Address <span className="required">*</span></label>
                                                        <input type="email" placeholder="Email" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="checkout-form-list">
                                                        <label>Phone <span className="required">*</span></label>
                                                        <input type="text" placeholder="Postcode / Zip" required />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="order-notes">
                                            <div className="checkout-form-list">
                                                <label>Order Notes</label>
                                                <textarea id="checkout-mess" cols="30" rows="10"
                                                    placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="your-order mb-30 ">
                                    <h3>Your order</h3>
                                    <div className="your-order-table table-responsive">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th className="product-name">Product</th>
                                                    <th className="product-total">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="cart_item">
                                                    <td className="product-name">
                                                        Turn Yourself <strong className="product-quantity"> × 1</strong>
                                                    </td>
                                                    <td className="product-total">
                                                        <span className="amount">$24.00</span>
                                                    </td>
                                                </tr>
                                                <tr className="cart_item">
                                                    <td className="product-name">
                                                        Art of Not Giving <strong className="product-quantity"> ×
                                                            1</strong>
                                                    </td>
                                                    <td className="product-total">
                                                        <span className="amount">$12.00</span>
                                                    </td>
                                                </tr>
                                                <tr className="cart_item">
                                                    <td className="product-name">
                                                        Attract Women <strong className="product-quantity"> ×
                                                            1</strong>
                                                    </td>
                                                    <td className="product-total">
                                                        <span className="amount">$42.00</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr className="cart-subtotal">
                                                    <th>Cart Subtotal</th>
                                                    <td><span className="amount">$78.00</span></td>
                                                </tr>
                                                <tr className="shipping">
                                                    <th>Shipping</th>
                                                    <td>
                                                        <ul>
                                                            <li>
                                                                <input type="radio" name='Shipping' />
                                                                <label>
                                                                    Flat Rate: <span className="amount">$7.00</span>
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <input type="radio" name='Shipping' />
                                                                <label>Free Shipping:</label>
                                                            </li>
                                                            <li></li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr className="order-total">
                                                    <th>Order Total</th>
                                                    <td><strong><span className="amount">$85.00</span></strong>
                                                    </td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>

                                    <div className="payment-method">
                                        <div className="accordion" id="checkoutAccordion">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="checkoutOne">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#bankOne" aria-expanded="true"
                                                        aria-controls="bankOne">
                                                        Direct Bank Transfer
                                                    </button>
                                                </h2>
                                                <div id="bankOne" className="accordion-collapse collapse show"
                                                    aria-labelledby="checkoutOne" data-bs-parent="#checkoutAccordion">
                                                    <div className="accordion-body">
                                                        Make your payment directly into our bank account. Please use your
                                                        Order ID
                                                        as the payment reference. Your order won’t be shipped until the
                                                        funds have
                                                        cleared in our account.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="paymentTwo">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#payment"
                                                        aria-expanded="false" aria-controls="payment">
                                                        Cheque Payment
                                                    </button>
                                                </h2>
                                                <div id="payment" className="accordion-collapse collapse"
                                                    aria-labelledby="paymentTwo" data-bs-parent="#checkoutAccordion">
                                                    <div className="accordion-body">
                                                        Please send your cheque to Store Name, Store Street, Store Town,
                                                        Store
                                                        State / County, Store
                                                        Postcode.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="paypalThree">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#paypal"
                                                        aria-expanded="false" aria-controls="paypal">
                                                        PayPal
                                                    </button>
                                                </h2>
                                                <div id="paypal" className="accordion-collapse collapse"
                                                    aria-labelledby="paypalThree" data-bs-parent="#checkoutAccordion">
                                                    <div className="accordion-body">
                                                        Pay via PayPal; you can pay with your credit card if you do not have
                                                        a
                                                        PayPal account.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="order-button-payment mt-20">
                                            <button type="submit" className="edu-btn">Place order</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default CheckoutSection;