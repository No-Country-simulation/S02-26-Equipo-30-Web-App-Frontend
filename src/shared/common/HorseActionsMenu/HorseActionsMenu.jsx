import React, { useMemo } from "react";
import Dropdown from "@/shared/common/dropdown/Dropdown";
import { MoreVertical, Eye, Pencil, Trash } from "lucide-react";
import "./HorseActionsMenu.css";

export default function HorseActionsMenu({
  canEdit = false,
  canDelete = false,
  onView,
  onEdit,
  onDelete,
  className = "",
}) {
  const items = useMemo(() => {
    const base = [
      {
        label: "Ver",
        icon: <Eye size={16} />,
        onClick: onView,
      },
    ];

    if (canEdit) {
      base.push({
        label: "Editar",
        icon: <Pencil size={16} />,
        onClick: onEdit,
      });
    }

    if (canDelete) {
      base.push({
        label: "Eliminar",
        icon: <Trash size={16} />,
        onClick: onDelete,
      });
    }

    return base;
  }, [canEdit, canDelete, onView, onEdit, onDelete]);

  return (
    <div className={`ham ${className}`}>
      <Dropdown
        trigger={
          <button type="button" className="ham__btn" aria-label="Abrir menú">
            <MoreVertical size={18} />
          </button>
        }
        items={items}
      />
    </div>
  );
}