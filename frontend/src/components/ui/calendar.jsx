import * as React from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "../../lib/utils"
import { buttonVariants } from "@/components/ui/button"

import "./calendar.css" // for any custom overrides

import PropTypes from "prop-types";

function Calendar({
  className,
  selected,
  onChange,
  minDate,
  maxDate,
  placeholderText = "Select a date",
  dateFormat = "MMM d, yyyy"
}) {
  return (
    <div className={cn("relative", className)}>
      <DatePicker
        selected={selected}
        onChange={onChange}
        minDate={minDate}
        maxDate={maxDate}
        placeholderText={placeholderText}
        dateFormat={dateFormat}
        className={cn(
          "w-full px-3 py-2 border rounded-md bg-background text-foreground text-sm",
          "focus:outline-none focus:ring-2 focus:ring-primary"
        )}
        popperClassName="z-50"
        calendarClassName="!p-3 !bg-popover !rounded-lg !shadow-md"
        dayClassName={(date) =>
          cn(
            "text-sm p-2 hover:bg-accent hover:text-accent-foreground rounded-md",
            date.toDateString() === new Date().toDateString() && "bg-accent text-accent-foreground"
          )
        }
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled
        }) => (
          <div className="flex justify-between items-center px-2 py-1 mb-2">
            <button
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-7 w-7 p-0 opacity-70 hover:opacity-100"
              )}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="text-sm font-medium">
              {date.toLocaleString("default", { month: "long" })} {date.getFullYear()}
            </span>
            <button
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-7 w-7 p-0 opacity-70 hover:opacity-100"
              )}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      />
    </div>
  )
}

Calendar.displayName = "Calendar"

export { Calendar }
Calendar.displayName = "Calendar"

Calendar.propTypes = {
  className: PropTypes.string,
  selected: PropTypes.instanceOf(Date),
  onChange: PropTypes.func.isRequired,
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  placeholderText: PropTypes.string,
  dateFormat: PropTypes.string
};

export { Calendar }
