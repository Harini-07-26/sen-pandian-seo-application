import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      reset();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section className="max-w-xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Input
            placeholder="Your Name"
            {...register("name")}
            className={errors.name ? "border-destructive" : undefined}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>
        <div>
          <Input
            placeholder="you@example.com"
            type="email"
            {...register("email")}
            className={errors.email ? "border-destructive" : undefined}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>
        <div>
          <Input
            placeholder="Phone (optional)"
            type="tel"
            {...register("phone")}
          />
        </div>
        <div>
          <Textarea
            placeholder="Your Message"
            rows={4}
            {...register("message")}
            className={errors.message ? "border-destructive" : undefined}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>
          )}
        </div>
        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
        {isSubmitSuccessful && (
          <p className="mt-2 text-sm text-primary-600 dark:text-primary-400">
            Your message has been sent!
          </p>
        )}
      </form>
    </section>
  );
}
