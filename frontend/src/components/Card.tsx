import type { ReactNode } from 'react';

interface CardProps {
    title: string;
    subtitle?: string;
    date?: string;
    children?: ReactNode;
    footer?: ReactNode;
    className?: string;
}

const Card = ({ title, subtitle, date, children, footer, className = '' }: CardProps) => {
    return (
        <div className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:shadow-lg hover:shadow-secondary/10 transition-all duration-300 hover:-translate-y-1 ${className}`}>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                    {subtitle && <p className="text-secondary font-medium mt-1">{subtitle}</p>}
                </div>
                {date && (
                    <span className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                        {date}
                    </span>
                )}
            </div>
            <div className="text-gray-300 mb-4 space-y-2">
                {children}
            </div>
            {footer && (
                <div className="pt-4 border-t border-gray-700/50 mt-4">
                    {footer}
                </div>
            )}
        </div>
    );
};

export default Card;
