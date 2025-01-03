import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function Home() {
  return (
    <div className="sm:mx-20 mx-5 my-5 pt-12 h-[72vh]">
      <h1 className="md:text-4xl sm:text-3xl text-2xl text-center text-white font-semibold my-3">Hello! Welcome to SR Blogs</h1>
      <div className=" text-lg text-center text-white">
      <p className="md:w-[70%] w-full mx-auto">
      Welcome to My Blog a space where ideas, knowledge, and creativity converge. Whether you are here to explore technology trends, gain insights into personal growth, or discover fresh perspectives, our blog is your destination for thoughtful and engaging content.
      </p>
      <p>Stay Connected for the informative content in future</p>
      </div>
      <div className="flex justify-center gap-4 my-5">
       
            <AlertDialog>
            <AlertDialogTrigger className="border-2 rounded-lg bg-white text-[#BC382E] font-semibold border-[#BC382E] hover:bg-[#BC382E] hover:text-white hover:border-white transition-all px-4 py-2">Create a Blog</AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>This Feature is not Introduced yet</AlertDialogTitle>
                <AlertDialogDescription>
                  Explore our Intresting and Informative Blogs about latest programminging trends.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Okay</AlertDialogCancel>
                <AlertDialogAction> <Link href={'blog'}>Read Blogs</Link> </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

        <Link className="border-2 rounded-lg bg-white text-[#BC382E] font-semibold border-[#BC382E] hover:bg-[#BC382E] hover:text-white hover:border-white transition-all px-4 py-2"  href={'blog'}>Read Blogs</Link>
      </div>

  </div>
  );
}
