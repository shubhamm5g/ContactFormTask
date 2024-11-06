const { z } = require("zod");
exports.contactFormScheam = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Email is invalid" })
    .min(2, { message: "Email must be atleast 2 character" })
    .max(255, { message: "Email must not be more then 255 characters" }),
  firstName: z
    .string({ required_error: "firstName is required" })
    .trim()
    .min(3, { message: "firstName must be atleast 3 character" })
    .max(255, { message: "firstName must not be more then 255 characters" }),
  lastName: z
    .string({ required_error: "lastName is required" })
    .trim()
    .min(3, { message: "lastName must be atleast 3 character" })
    .max(255, { message: "lastName must not be more then 255 characters" }),
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone is less then 10" })
    .max(10, { message: "Phone is greater then 10" }),
  message: z
    .string({ required_error: "Message is required" })
    .trim()
    .min(3, { message: "Message must be less then 3 character" })
    .max(455, { message: "Message must not be more then 455 characters" }),
  options: z
    .string({ required_error: "Option is required" })
    .trim()
    .min(3, { message: "Option must be less then 3 character" })
    .max(455, { message: "Option must not be more then 455 characters" }),
});
