import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters'),
  phone: Yup.string()
    .required('Phone number is required')
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(10, 'Phone must be at least 10 digits'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  persons: Yup.string()
    .required('Number of persons is required')
    .notOneOf([''], 'Please select number of persons'),
  date: Yup.date()
    .required('Date is required')
    .min(new Date(), 'Date cannot be in the past'),
});

export default function Book() {
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      initialValues: '',
      date: '',
    },
    validationSchema,
    onSubmit: (values) => {
      alert("Reservation completed successfully!");
      
    },
  });

  return (
    <section className='book-section mt-5 pt-5'>
      <div className="container">
        <h2>Book A Table</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="form-container">
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
                    placeholder='Your Name'
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="invalid-feedback">{formik.errors.name}</div>
                  ) : null}
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className={`form-control ${formik.touched.phone && formik.errors.phone ? 'is-invalid' : ''}`}
                    placeholder='Phone Number'
                    name="phone"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                  />
                  {formik.touched.phone && formik.errors.phone ? (
                    <div className="invalid-feedback">{formik.errors.phone}</div>
                  ) : null}
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                    placeholder='Your Email'
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="invalid-feedback">{formik.errors.email}</div>
                  ) : null}
                </div>

                <div className="mb-3">
                  <select
                        name="persons"
                        className={`form-control ${formik.touched.persons && formik.errors.persons ? 'is-invalid' : ''}`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.persons}
                      >
                        <option value="" disabled selected>How many persons?</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                  </select>
                  {formik.touched.persons && formik.errors.persons ? (
                    <div className="invalid-feedback">{formik.errors.persons}</div>
                  ) : null}
                </div>

                <div className="mb-3">
                  <input
                    type="date"
                    className={`form-control ${formik.touched.date && formik.errors.date ? 'is-invalid' : ''}`}
                    name="date"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.date}
                    min={new Date().toISOString().split('T')[0]}
                  />
                  {formik.touched.date && formik.errors.date ? (
                    <div className="invalid-feedback">{formik.errors.date}</div>
                  ) : null}
                </div>

                <button type="submit" className='order-book mb-5'>BOOK NOW</button>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16427.43522924033!2d31.239339263437437!3d30.0528381287779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z2KfZhNmC2KfZh9ix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1753858833687!5m2!1sar!2seg" 
                width="100%" 
                height="350" 
                style={{border:0}}
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Restaurant Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}