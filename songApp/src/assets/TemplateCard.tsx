

const TemplateCard = ({
    title,
    description,
    img,
    classNameToAdd,
    classNameOnSelected,
    /* selected,  we will make this a state instead of prop */
}: Props) => {
    
    const { aspectRatio, vmin } = useWindowResponsiveValues();


    const [selected, setSelected] = useState(false); // Added state

    // Added handler
    const handleClick = () => {
      setSelected(!selected);
    };

    if (selected) {
        className += `${styles.card} ${classNameToAdd} ${classNameOnSelected}`;
    }

    return (
        <div style={card} className={className} onClick={handleClick}>
            <img style={imageSize} src={img}></img>
            <div style={cardTitle}>{title}</div>
            <div style={descriptionCard}>{description}</div>
        </div>
    );
};
