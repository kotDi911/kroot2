import {useFormik} from "formik";
import * as Yup from "yup";
import Input from "./Input";

const GetInTouchForm = ({sentMail}) => {
    const {
        handleSubmit,
        handleChange,
        values,
        errors,
        touched,
        handleBlur,
        isSubmitting
    } = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            company: "",
            budget: "",
            timeline: "",
            startDate: "",
            deadline: "",
            linkTreatment: "",
            linkEdit: "",
            runtime: "",
            message: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .min(2, "First name must be min 2 letters")
                .max(15, "First name must be max 15 letters")
                .matches(/^[a-zA-Z -]+$/, "First name can only contain latin letters")
                .required("First name is required"),
            lastName: Yup.string()
                .min(2, "Last name must be min 2 letters")
                .max(15, "Last name must be max 15 letters")
                .matches(/^[a-zA-Z -]+$/, "Last name can only contain latin letters")
                .required("Last name is required"),
            email: Yup.string()
                .email("Email must be valid: user@exemple.com")
                .required("Email is required"),
            phone: Yup.string()
                .matches(
                    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
                    "Enter valid phone number. +1234567890"
                ),
            company: Yup.string()
                .matches(
                    /^[\w -]+$/,
                    "Company name can only contain: letters, numbers, space, and symbols:'-','_'"
                ),
            budget: Yup.string()
                .matches(
                    /^[\w -]+$/,
                    "Company name can only contain: letters, numbers, space, and symbols:'-','_'"
                ),
            timeline: Yup.string()
                .matches(
                    /^[\w -]+$/,
                    "Company name can only contain: letters, numbers, space, and symbols:'-','_'"
                ),
            startDate: Yup.string()
                .matches(
                    /^[\w -]+$/,
                    "Company name can only contain: letters, numbers, space, and symbols:'-','_'"
                ),
            deadline: Yup.string()
                .matches(
                    /^[\w -]+$/,
                    "Company name can only contain: letters, numbers, space, and symbols:'-','_'"
                ),
            linkTreatment: Yup.string()
                .matches(
                    // /^[\w -]+$/,
                    // "Company name can only contain: letters, numbers, space, and symbols:'-','_'"
                ),
            linkEdit: Yup.string()
                .matches(
                    /^[\w -]+$/,
                    "Company name can only contain: letters, numbers, space, and symbols:'-','_'"
                ),
            runtime: Yup.string()
                .matches(
                    /^[\w -]+$/,
                    "Company name can only contain: letters, numbers, space, and symbols:'-','_'"
                ),
            message: Yup.string()
                .max(500, "Max letter in message must be 500")
                .matches(
                    /^[\w.,?!\/\\&():;"' -]+$/,
                    "You can use: letters, numbers and next symbols: .,?!\/\\&():;\"' -"
                ),
        }),
        onSubmit: async ({firstName, lastName, email, phone, company, message}, {resetForm}) => {
            try {
                const data = new FormData()
                data.append("firstName", firstName)
                data.append("lastName", lastName)
                data.append("email", email)
                data.append("phone", phone)
                data.append("company", company)
                data.append("message", message)

                const res = await fetch("send_mail.php", {
                    method: "POST",
                    body: data,
                })
                if (res.ok) {
                    const data = await res.json();
                    sentMail(data.status, data.result);
                    resetForm();
                } else {
                    alert(res.status + " " + res.statusText)
                }
            } catch (err) {
                console.error(err)
            }
        }
    })
    return (
        <form className="form flex col" onSubmit={handleSubmit}>
            <div className="flex col-gap">
                <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    label="What's your first name?*"
                    placeholder="Enter your first name"
                    onChange={handleChange}
                    value={values.firstName}
                    onBlur={handleBlur}
                    touched={touched.firstName}
                    errors={errors.firstName}
                />
                <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    label="What's your last name?*"
                    placeholder="Enter your last name"
                    onChange={handleChange}
                    value={values.lastName}
                    onBlur={handleBlur}
                    touched={touched.lastName}
                    errors={errors.lastName}
                />
            </div>
            <Input
                id="email"
                name="email"
                type="email"
                label="What's your email?*"
                placeholder="Enter your email"
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
                touched={touched.email}
                errors={errors.email}
            />
            <Input
                id="phone"
                name="phone"
                type="tel"
                label="What's your phone number?"
                placeholder="Enter your phone number"
                onChange={handleChange}
                value={values.phone}
                onBlur={handleBlur}
                touched={touched.phone}
                errors={errors.phone}
            />
            <Input
                id="company"
                name="company"
                type="text"
                label="What's your company?"
                placeholder="Enter company"
                onChange={handleChange}
                value={values.company}
                onBlur={handleBlur}
                touched={touched.company}
                errors={errors.company}
            />
            <div className="flex col-gap">
                <Input
                    id="budget"
                    name="budget"
                    type="text"
                    label="What's your budget?*"
                    placeholder="Enter your budget"
                    onChange={handleChange}
                    value={values.budget}
                    onBlur={handleBlur}
                    touched={touched.budget}
                    errors={errors.budget}
                />
                <Input
                    id="timeline"
                    name="timeline"
                    type="text"
                    label="What's your timeline?*"
                    placeholder="Enter your timeline"
                    onChange={handleChange}
                    value={values.timeline}
                    onBlur={handleBlur}
                    touched={touched.timeline}
                    errors={errors.timeline}
                />
            </div>
            <div className="flex col-gap">
                <Input
                    id="startDate"
                    name="startDate"
                    type="text"
                    label="What's your start date?"
                    placeholder="dd.mm.yyyy"
                    onChange={handleChange}
                    value={values.startDate}
                    onBlur={handleBlur}
                    touched={touched.startDate}
                    errors={errors.startDate}
                />
                <Input
                    id="deadline"
                    name="deadline"
                    type="text"
                    label="What's your deadline date?"
                    placeholder="dd.mm.yyyy"
                    onChange={handleChange}
                    value={values.deadline}
                    onBlur={handleBlur}
                    touched={touched.deadline}
                    errors={errors.deadline}
                />
            </div>
            <Input
                id="videoTreatment"
                name="videoTreatment"
                type="text"
                label="Link to your video treatment"
                placeholder="https://example.com/treatment"
                onChange={handleChange}
                value={values.linkTreatment}
                onBlur={handleBlur}
                touched={touched.linkTreatment}
                errors={errors.linkTreatment}
            />
            <Input
                id="videoEdit"
                name="videoEdit"
                type="text"
                label="Link to your video edit"
                placeholder="https://example.com/video"
                onChange={handleChange}
                value={values.linkEdit}
                onBlur={handleBlur}
                touched={touched.linkEdit}
                errors={errors.linkEdit}
            />
            <Input
                id="runtime"
                name="runtime"
                type="text"
                label="If no edit, please include the expected runtime of the upcoming video"
                placeholder="(MV) 02:30 or (ADV) :60+ :15 :30 cutdowns"
                onChange={handleChange}
                value={values.runtime}
                onBlur={handleBlur}
                touched={touched.runtime}
                errors={errors.runtime}
            />
            <label htmlFor="message" className="input__label">Do you have any wishes or comments?</label>
            <textarea
                className="input__input message"
                id="message"
                name="message"
                placeholder="Write your comment here"
                onChange={handleChange}
                value={values.message}
                onBlur={handleBlur}
            ></textarea>
            <div className="relative">
                {touched.message && errors.message ? (<span className="input__err">{errors.message}</span>) : null}
            </div>
            <button className="submit" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Submit"}
            </button>
        </form>
    )
}
export default GetInTouchForm