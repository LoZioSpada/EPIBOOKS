import { Row, Col } from "react-bootstrap";
import styles from "./style.module.scss"
import cn from "classnames";

export default function NotFound() {
    <Row>
        <Col xs={12}>
            <div className={cn(styles.textRed,'text-center mt-5')}>
                <h1>404</h1>
                <h2>Page Not Found</h2>
            </div>
        </Col>
    </Row>
}