import AddPanel from "@/components/AddPanel/AddPanel";
import Cards from "@/components/Cardss/CardsList/CardsList";
import ProgressList from "@/components/Progresss/ProgressList/ProgressList";
import RecentActivity from "@/components/RecentActivityList/RecentActivityList";
import TableComponent from "@/components/Feedbacks/Table/Table";
import Title from "@/components/Common/Title/Title";

export default function Home() {
  const cardVariants: {} = {
    hidden: {
      x: 100,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }
  return (
    <>
      <Title/>
      <Cards />
      <div className="flex flex-col p-5">
        <AddPanel />
        <TableComponent />
        <div className="flex xl:flex-row xl:items-start md:items-start md:flex-row sm:flex-col max-sm:flex-col max-sm:items-center lg:flex-row sm:items-center lg:items-start justify-between mt-20">
          <ProgressList />
          <RecentActivity />
        </div>
      </div>
    </>
  );
}
