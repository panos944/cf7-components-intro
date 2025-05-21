// type Props = {
//   title: string;
// }

interface Props {
  title: string
}

const ArrowFunctionalComponentWithPropsType = ({title}: Props) => {

    return <h1 className="text-center text-xl font-bold mt-12">{title}</h1>
}


export default ArrowFunctionalComponentWithPropsType;