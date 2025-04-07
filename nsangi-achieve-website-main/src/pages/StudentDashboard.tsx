
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Printer, Download, FileText, CreditCard, GraduationCap, BookOpen } from 'lucide-react';

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  // Mock student data
  const studentData = {
    name: "John Doe",
    class: "Senior Four (S4)",
    admissionNumber: "NSS/2023/001",
    house: "Excellence House",
    joinDate: "January 2023",
    fees: {
      totalAmount: 1200000,
      paid: 850000,
      balance: 350000,
      history: [
        { date: "10/01/2023", amount: 500000, receiptNo: "RC-0012345" },
        { date: "15/03/2023", amount: 350000, receiptNo: "RC-0012567" }
      ]
    },
    academicRecords: [
      {
        term: "Term 1, 2023",
        subjects: [
          { name: "Mathematics", score: 82, grade: "A", remarks: "Excellent" },
          { name: "English", score: 78, grade: "B+", remarks: "Very Good" },
          { name: "Physics", score: 75, grade: "B", remarks: "Good" },
          { name: "Chemistry", score: 70, grade: "B", remarks: "Good" },
          { name: "Biology", score: 85, grade: "A", remarks: "Excellent" },
        ],
        position: 5,
        totalStudents: 120,
        remarks: "Good performance. Keep improving in English."
      },
      {
        term: "Term 2, 2023",
        subjects: [
          { name: "Mathematics", score: 85, grade: "A", remarks: "Excellent" },
          { name: "English", score: 80, grade: "A-", remarks: "Excellent" },
          { name: "Physics", score: 78, grade: "B+", remarks: "Very Good" },
          { name: "Chemistry", score: 75, grade: "B", remarks: "Good" },
          { name: "Biology", score: 88, grade: "A", remarks: "Excellent" },
        ],
        position: 3,
        totalStudents: 120,
        remarks: "Excellent improvement. Keep up the good work!"
      }
    ]
  };

  // Function to handle printing testimonial
  const handlePrintTestimonial = () => {
    window.print();
  };

  // Function to download testimonial as PDF (mock)
  const handleDownloadTestimonial = () => {
    alert("Downloading testimonial PDF... (This would be a real PDF download in production)");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-nsangi-maroon py-8">
        <div className="container mx-auto px-4 text-white">
          <h1 className="text-2xl md:text-3xl font-bold">Student Dashboard</h1>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2">
            <p className="text-lg italic">Welcome, {studentData.name}</p>
            <p className="text-sm">Admission No: {studentData.admissionNumber}</p>
          </div>
        </div>
      </div>
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="fees">School Fees</TabsTrigger>
              <TabsTrigger value="academics">Academic Records</TabsTrigger>
              <TabsTrigger value="testimonial">Testimonial</TabsTrigger>
            </TabsList>
            
            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Student Information</CardTitle>
                    <CardDescription>Your personal details</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between py-1 border-b">
                        <span className="font-medium">Full Name:</span>
                        <span>{studentData.name}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b">
                        <span className="font-medium">Class:</span>
                        <span>{studentData.class}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b">
                        <span className="font-medium">Admission Number:</span>
                        <span>{studentData.admissionNumber}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b">
                        <span className="font-medium">House:</span>
                        <span>{studentData.house}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b">
                        <span className="font-medium">Joining Date:</span>
                        <span>{studentData.joinDate}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Fees Summary</CardTitle>
                    <CardDescription>Current term fees status</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-medium">Total Fees:</span>
                        <span className="text-lg">UGX {studentData.fees.totalAmount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center text-green-600">
                        <span className="font-medium">Amount Paid:</span>
                        <span>UGX {studentData.fees.paid.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center text-red-500">
                        <span className="font-medium">Balance:</span>
                        <span>UGX {studentData.fees.balance.toLocaleString()}</span>
                      </div>
                      <div className="pt-2">
                        <Button 
                          onClick={() => setActiveTab("fees")} 
                          className="w-full bg-nsangi-maroon hover:bg-nsangi-dark"
                        >
                          <CreditCard className="mr-2 h-4 w-4" /> View Complete Fees Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Quick Actions</CardTitle>
                    <CardDescription>Access common features</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <Button 
                      onClick={() => setActiveTab("academics")} 
                      variant="outline" 
                      className="justify-start"
                    >
                      <BookOpen className="mr-2 h-4 w-4" /> View Academic Records
                    </Button>
                    <Button 
                      onClick={() => setActiveTab("testimonial")} 
                      variant="outline" 
                      className="justify-start"
                    >
                      <FileText className="mr-2 h-4 w-4" /> View Testimonial
                    </Button>
                    <Button 
                      onClick={handlePrintTestimonial} 
                      variant="outline" 
                      className="justify-start"
                    >
                      <Printer className="mr-2 h-4 w-4" /> Print Testimonial
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Important Announcements</CardTitle>
                    <CardDescription>School updates and reminders</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-3 bg-blue-50 border border-blue-200 rounded-md">
                        <h4 className="font-medium text-blue-800">End of Term Examinations</h4>
                        <p className="text-sm text-blue-600">Final examinations will begin on November 15th. Ensure all fees are cleared before exams.</p>
                      </div>
                      <div className="p-3 bg-amber-50 border border-amber-200 rounded-md">
                        <h4 className="font-medium text-amber-800">Parents' Meeting</h4>
                        <p className="text-sm text-amber-600">There will be a parents' meeting on October 28th at 9:00 AM.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Fees Tab */}
            <TabsContent value="fees" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>School Fees Statement</CardTitle>
                  <CardDescription>Your current fees status and payment history</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 bg-white border rounded-lg text-center">
                        <p className="text-gray-500 text-sm">Total Fees</p>
                        <p className="text-2xl font-bold">UGX {studentData.fees.totalAmount.toLocaleString()}</p>
                      </div>
                      <div className="p-4 bg-green-50 border border-green-100 rounded-lg text-center">
                        <p className="text-green-600 text-sm">Amount Paid</p>
                        <p className="text-2xl font-bold text-green-600">UGX {studentData.fees.paid.toLocaleString()}</p>
                      </div>
                      <div className="p-4 bg-red-50 border border-red-100 rounded-lg text-center">
                        <p className="text-red-500 text-sm">Outstanding Balance</p>
                        <p className="text-2xl font-bold text-red-500">UGX {studentData.fees.balance.toLocaleString()}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Payment History</h3>
                      <div className="rounded-md border">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Date</TableHead>
                              <TableHead>Amount (UGX)</TableHead>
                              <TableHead>Receipt Number</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {studentData.fees.history.map((payment, index) => (
                              <TableRow key={index}>
                                <TableCell>{payment.date}</TableCell>
                                <TableCell>{payment.amount.toLocaleString()}</TableCell>
                                <TableCell>{payment.receiptNo}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Fee Payment Notes</h3>
                      <div className="p-4 bg-amber-50 border border-amber-200 rounded-md text-amber-800">
                        <p className="text-sm">
                          Please clear all outstanding balances before the start of end-of-term examinations.
                          Payments can be made to the school's bank account or directly to the bursar's office.
                          Always ensure to collect a receipt for any payment made.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Academics Tab */}
            <TabsContent value="academics" className="space-y-6">
              {studentData.academicRecords.map((record, recordIndex) => (
                <Card key={recordIndex}>
                  <CardHeader>
                    <CardTitle>{record.term}</CardTitle>
                    <CardDescription>
                      Position: {record.position} out of {record.totalStudents} students
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-md border">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Subject</TableHead>
                            <TableHead>Score</TableHead>
                            <TableHead>Grade</TableHead>
                            <TableHead>Remarks</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {record.subjects.map((subject, subjectIndex) => (
                            <TableRow key={subjectIndex}>
                              <TableCell>{subject.name}</TableCell>
                              <TableCell>{subject.score}</TableCell>
                              <TableCell>{subject.grade}</TableCell>
                              <TableCell>{subject.remarks}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                    
                    <div className="mt-4 p-4 bg-gray-50 border rounded-md">
                      <h4 className="font-medium mb-1">Class Teacher's Remarks:</h4>
                      <p className="text-gray-700">{record.remarks}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            {/* Testimonial Tab */}
            <TabsContent value="testimonial" className="space-y-6">
              <Card>
                <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div>
                    <CardTitle>Student Testimonial</CardTitle>
                    <CardDescription>Your official school testimonial</CardDescription>
                  </div>
                  <div className="flex space-x-2 mt-4 sm:mt-0">
                    <Button 
                      onClick={handlePrintTestimonial} 
                      variant="outline" 
                      className="flex items-center"
                    >
                      <Printer className="mr-2 h-4 w-4" /> Print
                    </Button>
                    <Button 
                      onClick={handleDownloadTestimonial} 
                      className="flex items-center bg-nsangi-maroon hover:bg-nsangi-dark"
                    >
                      <Download className="mr-2 h-4 w-4" /> Download
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-gray-200 p-6 min-h-[500px] testimonial-content">
                    {/* Testimonial Header */}
                    <div className="text-center mb-8">
                      <div className="flex justify-center mb-4">
                        <img 
                          src="/lovable-uploads/a5a6c3b6-3cae-439b-ad2c-4eaddb472bb4.png" 
                          alt="Nsangi Secondary School" 
                          className="h-24 w-auto" 
                        />
                      </div>
                      <h1 className="text-2xl font-bold text-nsangi-maroon">NSANGI SECONDARY SCHOOL</h1>
                      <p className="text-sm italic">"Work and Achieve"</p>
                      <p className="text-sm mt-1">P.O. BOX 10, NATEETE | Email: nsangiss@yahoo.com</p>
                      <h2 className="text-xl font-bold mt-4 border-t border-b py-2">STUDENT TESTIMONIAL</h2>
                    </div>
                    
                    {/* Testimonial Body */}
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <p><span className="font-medium">Full Name:</span> {studentData.name}</p>
                          <p><span className="font-medium">Admission Number:</span> {studentData.admissionNumber}</p>
                          <p><span className="font-medium">Class:</span> {studentData.class}</p>
                        </div>
                        <div>
                          <p><span className="font-medium">House:</span> {studentData.house}</p>
                          <p><span className="font-medium">Date of Admission:</span> {studentData.joinDate}</p>
                          <p><span className="font-medium">Date of Issue:</span> April 7, 2025</p>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h3 className="font-medium mb-2">Character Assessment</h3>
                        <p className="text-gray-700">
                          This is to certify that {studentData.name} has been a student at Nsangi Secondary School 
                          since {studentData.joinDate}. During their time at our institution, they have demonstrated 
                          exceptional character, diligence, and commitment to academic excellence.
                        </p>
                        <p className="text-gray-700 mt-3">
                          Their conduct has been exemplary, and they have actively participated in school activities
                          and shown leadership qualities. They have maintained good relationships with both staff and
                          fellow students, demonstrating respect, responsibility, and integrity at all times.
                        </p>
                      </div>
                      
                      <div className="mt-6">
                        <h3 className="font-medium mb-2">Academic Performance</h3>
                        <p className="text-gray-700">
                          {studentData.name} has maintained an excellent academic record throughout their time at 
                          Nsangi Secondary School. They have consistently performed above average in all subjects,
                          with particular strengths in Mathematics and Sciences. Their commitment to learning and 
                          intellectual curiosity are commendable.
                        </p>
                      </div>
                      
                      <div className="mt-8">
                        <h3 className="font-medium mb-2">Extra-Curricular Activities</h3>
                        <p className="text-gray-700">
                          They have actively participated in various extra-curricular activities including:
                        </p>
                        <ul className="list-disc list-inside ml-4 mt-1 text-gray-700">
                          <li>Member of the School Science Club</li>
                          <li>Participated in Inter-School Debates</li>
                          <li>Active member of the School Football Team</li>
                        </ul>
                      </div>
                      
                      <div className="mt-8">
                        <h3 className="font-medium mb-2">Recommendation</h3>
                        <p className="text-gray-700">
                          We highly recommend {studentData.name} for further education or employment opportunities.
                          We are confident that they will continue to excel in their future endeavors and make 
                          positive contributions to society.
                        </p>
                      </div>
                      
                      <div className="mt-12 pt-8 border-t grid grid-cols-2 gap-8">
                        <div>
                          <div className="h-10 mb-1"></div>
                          <div className="border-t border-black w-48">
                            <p className="text-sm font-medium mt-1">Head Teacher's Signature</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <div className="h-16 mb-2 flex items-center justify-center">
                            <div className="w-24 h-24 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
                              School Seal
                            </div>
                          </div>
                          <p className="text-sm font-medium">April 7, 2025</p>
                          <p className="text-sm text-gray-500">Date of Issue</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StudentDashboard;
