export default function Home() {
  return <div></div>
}

export const getServerSideProps = async () => {
  return {
    redirect: { destination: '/admin/dashboard', permanent: true }
  }
}
