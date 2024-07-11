import { ACTION , AuditLog } from "@prisma/client";

export const generateLogMessage = (log: AuditLog) => {
    const { action, entityTitle, entityType } = log;

    switch (action) {
    case ACTION.CREATE:
    return `"${entityTitle}"  ${entityType.toLowerCase()} oluşturuldu`;
    case ACTION.UPDATE:
    return `${entityType.toLowerCase()} "${entityTitle}" güncellendi `;
    case ACTION.DELETE:
    return `${entityType.toLowerCase()} "${entityTitle}" silindi `;
    default:
    return `unknown action ${entityType.toLowerCase()} "${entityTitle}"`;
    };
};