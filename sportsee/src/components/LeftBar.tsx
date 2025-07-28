export default function LeftBar() {
    return <>
        <div className="leftbar">
            <div className="leftbar__badges">
                <ul>
                    <li><img className="leftbar__badges--icon"
                             src="/assets/badge_relaxation.svg" alt="Relaxation icon"/></li>
                    <li><img className="leftbar__badges--icon"
                             src="/assets/badge_swim.svg" alt="Swimming icon"/></li>
                    <li><img className="leftbar__badges--icon"
                             src="/assets/badge_bike.svg" alt="Biking icon"/></li>
                    <li><img className="leftbar__badges--icon"
                             src="/assets/badge_fitness.svg" alt="Fitness icon"/></li>
                </ul>
            </div>
            <div className="leftbar__copyright">Copyright, SportSee
                2020
            </div>
        </div>
    </>
}