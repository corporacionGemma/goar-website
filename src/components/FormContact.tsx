import React from 'react'
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  type FormikErrors
} from 'formik'

interface MyFormValues {
  name: string
  email: string
  message: string
}

export const FormContact: React.FC = () => {
  const initialValues: MyFormValues = { name: '', email: '', message: '' }
  const TextTarea = ({ field, form, ...props }: { field: any, props: any, form: any }): JSX.Element => {
    console.log(form)
    return <textarea id="message" rows={6} {...field} {...props} />
  }
  return (
    <div className='w-full'>
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors: FormikErrors<MyFormValues> = {}
          if (values.name === '') {
            errors.name = 'El nombre es requerido*'
          }
          if (values.email === '') {
            errors.email = 'Correo electrónico requerido*'
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Correo electrónico invalido*'
          }
          return errors
        }}
        // onSubmit={(values, actions) => {
        //   console.log({ values, actions })
        //   // alert(JSON.stringify(values, null, 2))
        //   // setTimeout(() => {
        //   //   actions.setSubmitting(false)
        //   //   actions.resetForm()
        //   // }, 40000)
        // }}
        onSubmit={(values, actions) => {
          console.log({ values, actions })
          // alert(JSON.stringify(values, null, 2))
          setTimeout(() => {
            actions.setSubmitting(false)
            actions.resetForm()
          }, 3000)
        }}
      >
        {({ isSubmitting, errors, touched }) => {
          return (
            <Form>
              <div
                  className={'block mt-[29px] h-[108px]'}
              >
                <label className='block mb-[11px] cursor-pointer font-[500] text-[14px] tracking-[.1em] uppercase' htmlFor="name">NOMBRES Y APELLIDOS <span className='text-primary'>REQUERIDO</span></label>
                <Field
                  className={`block ${
                    errors.name !== '' && touched.name === true && errors.name !== ''
                      ? 'border-b-red-600'
                      : 'border-tertiary-border'
                  } w-full border-b-[1px] outline-none inputForm`}
                  type="text"
                  id="name"
                  name="name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-[16px] text-red-600"
                />
              </div>
              <div
                  className={'block mt-[29px] h-[108px]'}
              >
                <label className='block mb-[11px] cursor-pointer font-[500] text-[14px] tracking-[.1em] uppercase' htmlFor="email">CORREO ELECTRÓNICO <span className='text-primary'>REQUERIDO</span></label>
                <Field
                  className={`block ${
                    errors.email !== '' && touched.email === true && errors.email !== ''
                      ? 'border-b-red-600'
                      : 'border-tertiary-border'
                  } w-full border-b-[1px] outline-none inputForm`}
                  type="email"
                  id="email"
                  name="email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-[16px] text-red-600"
                />
              </div>
              <div className={'block mt-[29px] mb-[55px]'}>
                <label className='block  mb-[11px] font-[500] cursor-pointer text-[14px] tracking-[.1em] uppercase' htmlFor="message">CONSULTA</label>
                <Field
                  className='block inputForm w-full outline-none border-b-[1px] border-tertiary-border'
                  id="mesagge"
                  name="message"
                  component = {TextTarea}
                />
                </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className='bg-primary py-[7px] px-[40px] text-white button-form rounded '
              >
                {
                  isSubmitting
                    ? (
                      <div className="w-full flex justify-center px-6">
                        <div className="spinner"></div>
                      </div>
                      )
                    : (
                      <p className="font-[400] tracking-[.02em] text-[16px] py-[2px] leading-[2em]">CONSULTAR</p>
                      )
                }
              </button>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}
