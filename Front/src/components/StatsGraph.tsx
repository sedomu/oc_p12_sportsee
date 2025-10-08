type Props = {
    iconSrc: string,
    figure: number,
    unit: string,
    intakeText: string,
}

export default function StatsGraph({iconSrc, figure, unit, intakeText}: Props) {
    const figureText = new Intl.NumberFormat('en-EN').format(figure) + unit

    return <>
        <div className="content__graphs--stats-container">
            <img className="content__graphs--stats-icon" src={iconSrc} alt={intakeText + " icon"}></img>
            <div className="content__graphs--stats-data">
                <div className="content__graphs--stats-data-figure">{figureText}</div>
                <div className="content__graphs--stats-data-intake">{intakeText}</div>
            </div>
        </div>
    </>
}