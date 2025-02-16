import TemplateCard from 
import styles from "./index.css";

export type Template = {
    title: string;
    description: string;
    imgURL: string;
};

type Props = {
    templates: Template[];
};

const TemplateList = ({ templates }: Props) => {
    return (
        <div className={styles.scrollContainer}>
            {templates.map((item) => (
                <TemplateCard
                    title={item.title}
                    description={item.description}
                    img={item.imgURL}
                    classNameToAdd={styles.cardContainer}
                />
            ))}
        </div>
    );
};

export default TemplateList;
