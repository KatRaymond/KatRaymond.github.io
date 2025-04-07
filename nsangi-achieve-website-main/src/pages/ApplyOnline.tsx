
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ArrowRight, ChevronDown, FileCheck, FolderOpen, Info } from 'lucide-react';

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().min(2, { message: "Last name is required" }),
  dateOfBirth: z.string().min(1, { message: "Date of birth is required" }),
  gender: z.string().min(1, { message: "Gender is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Phone number is required" }),
  address: z.string().min(5, { message: "Address is required" }),
  districtOfResidence: z.string().min(2, { message: "District is required" }),
  previousSchool: z.string().optional(),
  guardianName: z.string().min(2, { message: "Guardian name is required" }),
  guardianPhone: z.string().min(10, { message: "Guardian phone is required" }),
  guardianEmail: z.string().email({ message: "Invalid email address" }).optional(),
  guardianRelationship: z.string().min(1, { message: "Relationship is required" }),
  classToJoin: z.string().min(1, { message: "Class to join is required" }),
  residentialOption: z.string().min(1, { message: "Residential option is required" }),
  hobbies: z.string().optional(),
  specialNeeds: z.string().optional(),
  termsAccepted: z.boolean().refine(value => value === true, {
    message: "You must accept the terms and conditions",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const ApplyOnline = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [isEligibilityOpen, setIsEligibilityOpen] = React.useState(true);
  const [isRequirementsOpen, setIsRequirementsOpen] = React.useState(true);
  const [isFeesOpen, setIsFeesOpen] = React.useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
      email: "",
      phone: "",
      address: "",
      districtOfResidence: "",
      previousSchool: "",
      guardianName: "",
      guardianPhone: "",
      guardianEmail: "",
      guardianRelationship: "",
      classToJoin: "",
      residentialOption: "",
      hobbies: "",
      specialNeeds: "",
      termsAccepted: false,
    },
  });

  function onSubmit(data: FormValues) {
    console.log("Application submitted:", data);
    toast({
      title: "Application Submitted",
      description: "Your application has been received. We'll contact you soon.",
    });
    
    // In a real app, this would send data to a backend
    navigate("/");
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-nsangi-maroon py-12">
        <div className="container mx-auto px-4 text-white">
          <h1 className="text-3xl md:text-4xl font-bold">Apply for Admission</h1>
          <p className="text-lg mt-2 italic">"Work and Achieve"</p>
        </div>
      </div>
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Admission Information</CardTitle>
                  <CardDescription>Important details for applicants</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Collapsible 
                    open={isEligibilityOpen} 
                    onOpenChange={setIsEligibilityOpen}
                    className="border rounded-lg overflow-hidden"
                  >
                    <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left font-medium bg-gray-50 hover:bg-gray-100">
                      Eligibility Criteria
                      <ChevronDown className={`h-5 w-5 transition-transform ${isEligibilityOpen ? 'transform rotate-180' : ''}`} />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 pt-0 text-sm">
                      <div className="pt-4 space-y-2">
                        <p>To be eligible for admission to Nsangi Secondary School, students must:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Have completed primary education with satisfactory grades</li>
                          <li>Pass the school's entrance examination</li>
                          <li>Be of good character and discipline</li>
                          <li>Be within the appropriate age range for the class applied for</li>
                          <li>Have parents/guardians who accept the school's rules and regulations</li>
                        </ul>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                  
                  <Collapsible 
                    open={isRequirementsOpen} 
                    onOpenChange={setIsRequirementsOpen}
                    className="border rounded-lg overflow-hidden"
                  >
                    <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left font-medium bg-gray-50 hover:bg-gray-100">
                      Required Documents
                      <ChevronDown className={`h-5 w-5 transition-transform ${isRequirementsOpen ? 'transform rotate-180' : ''}`} />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 pt-0 text-sm">
                      <div className="pt-4 space-y-2">
                        <p>All applicants must submit the following documents:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Completed application form (this form)</li>
                          <li>Birth certificate or affidavit</li>
                          <li>Two recent passport photos</li>
                          <li>Previous school's academic reports</li>
                          <li>PLE results slip (for S.1 applicants)</li>
                          <li>Transfer letter (for students transferring from other schools)</li>
                          <li>Medical form (will be provided upon provisional acceptance)</li>
                        </ul>
                        <p className="mt-4 text-orange-600 font-medium">Note: Original documents must be presented during the interview.</p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                  
                  <Collapsible 
                    open={isFeesOpen} 
                    onOpenChange={setIsFeesOpen}
                    className="border rounded-lg overflow-hidden"
                  >
                    <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left font-medium bg-gray-50 hover:bg-gray-100">
                      School Fees Structure
                      <ChevronDown className={`h-5 w-5 transition-transform ${isFeesOpen ? 'transform rotate-180' : ''}`} />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 pt-0 text-sm">
                      <div className="pt-4">
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-medium">Boarding Students</h4>
                            <p>UGX 1,200,000 per term</p>
                          </div>
                          <div>
                            <h4 className="font-medium">Day Students</h4>
                            <p>UGX 600,000 per term</p>
                          </div>
                          <div>
                            <h4 className="font-medium">Additional Fees (One-time)</h4>
                            <p>Registration Fee: UGX 50,000</p>
                            <p>Development Fee: UGX 150,000</p>
                            <p>Uniform: UGX 180,000</p>
                          </div>
                          <p className="text-sm text-gray-500 mt-3">
                            * Fees are subject to change. A detailed fee structure will be provided upon admission.
                          </p>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                  
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-start">
                      <Info className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-blue-800">Application Timeline</h4>
                        <p className="text-sm text-blue-700 mt-1">
                          Applications are processed within 2 weeks. Shortlisted candidates will be invited for an 
                          entrance examination and interview. Successful applicants will receive admission letters 
                          with instructions for enrollment.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                    <div className="flex items-start">
                      <FileCheck className="h-5 w-5 text-amber-600 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-amber-800">Need Help?</h4>
                        <p className="text-sm text-amber-700 mt-1">
                          For any questions regarding the application process, please contact the admissions office:
                        </p>
                        <p className="text-sm font-medium text-amber-700 mt-2">
                          Tel: 0772 433 313<br />
                          Email: nsangiss@yahoo.com
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FolderOpen className="h-5 w-5 mr-2" /> Application Form
                  </CardTitle>
                  <CardDescription>
                    Please fill out all required fields to apply for admission to Nsangi Secondary School
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      {/* Student Information Section */}
                      <div>
                        <h3 className="text-lg font-medium border-b pb-2 mb-4">Student Information</h3>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>First Name*</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter first name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Last Name*</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter last name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2 mt-4">
                          <FormField
                            control={form.control}
                            name="dateOfBirth"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Date of Birth*</FormLabel>
                                <FormControl>
                                  <Input type="date" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="gender"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Gender*</FormLabel>
                                <FormControl>
                                  <select 
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    {...field}
                                  >
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                  </select>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2 mt-4">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address*</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="Enter email address" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number*</FormLabel>
                                <FormControl>
                                  <Input placeholder="e.g. 0772123456" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="mt-4">
                          <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Home Address*</FormLabel>
                                <FormControl>
                                  <Textarea placeholder="Enter your home address" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2 mt-4">
                          <FormField
                            control={form.control}
                            name="districtOfResidence"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>District of Residence*</FormLabel>
                                <FormControl>
                                  <Input placeholder="e.g. Wakiso" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="previousSchool"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Previous School</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter previous school name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                      
                      {/* Parent/Guardian Information */}
                      <div>
                        <h3 className="text-lg font-medium border-b pb-2 mb-4">Parent/Guardian Information</h3>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="guardianName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Parent/Guardian Name*</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter full name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="guardianRelationship"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Relationship to Student*</FormLabel>
                                <FormControl>
                                  <Input placeholder="e.g. Father, Mother, Guardian" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2 mt-4">
                          <FormField
                            control={form.control}
                            name="guardianPhone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number*</FormLabel>
                                <FormControl>
                                  <Input placeholder="e.g. 0772123456" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="guardianEmail"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address (Optional)</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="Enter email address" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                      
                      {/* Academic Information */}
                      <div>
                        <h3 className="text-lg font-medium border-b pb-2 mb-4">Academic Information</h3>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="classToJoin"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Class to Join*</FormLabel>
                                <FormControl>
                                  <select 
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    {...field}
                                  >
                                    <option value="">Select Class</option>
                                    <option value="S1">Senior One (S.1)</option>
                                    <option value="S2">Senior Two (S.2)</option>
                                    <option value="S3">Senior Three (S.3)</option>
                                    <option value="S4">Senior Four (S.4)</option>
                                    <option value="S5">Senior Five (S.5)</option>
                                    <option value="S6">Senior Six (S.6)</option>
                                  </select>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="residentialOption"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Residential Option*</FormLabel>
                                <FormControl>
                                  <select 
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    {...field}
                                  >
                                    <option value="">Select Option</option>
                                    <option value="boarding">Boarding Student</option>
                                    <option value="day">Day Student</option>
                                  </select>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                      
                      {/* Additional Information */}
                      <div>
                        <h3 className="text-lg font-medium border-b pb-2 mb-4">Additional Information</h3>
                        <div className="mt-4">
                          <FormField
                            control={form.control}
                            name="hobbies"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Hobbies & Interests (Optional)</FormLabel>
                                <FormControl>
                                  <Textarea placeholder="Share student's hobbies and interests" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="mt-4">
                          <FormField
                            control={form.control}
                            name="specialNeeds"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Special Needs/Medical Conditions (Optional)</FormLabel>
                                <FormControl>
                                  <Textarea placeholder="Please share any special needs or medical conditions" {...field} />
                                </FormControl>
                                <FormDescription>
                                  This information helps us provide appropriate support for your child.
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                      
                      {/* Terms & Conditions */}
                      <div className="p-4 border rounded-lg bg-gray-50">
                        <FormField
                          control={form.control}
                          name="termsAccepted"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>
                                  I agree to Nsangi Secondary School's terms, conditions, and code of conduct. I confirm that all information provided is accurate and true.
                                </FormLabel>
                                <FormMessage />
                              </div>
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-nsangi-maroon hover:bg-nsangi-dark text-white"
                      >
                        Submit Application <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ApplyOnline;
