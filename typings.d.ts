declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
    export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement;
    const url: string;
    const content: SvgrComponent;
    export default content;
}
