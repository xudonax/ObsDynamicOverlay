using Microsoft.AspNetCore.Mvc.Rendering;
using ObsDynamicOverlay.DAL.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;

namespace ObsDynamicOverlay.Web.Business.Extensions
{
    public static class FileTypesExtensions
    {
        private const string DefaultMimeType = "application/octet-stream";

        public static string AsMimeType(this FileTypes value)
        {
            var fieldInfo = value.GetType().GetField(value.ToString());


            if (fieldInfo.GetCustomAttributes(typeof(DescriptionAttribute), false) is DescriptionAttribute[] attributes && attributes.Any())
            {
                return attributes.First().Description;
            }

            return DefaultMimeType;
        }

        public static IEnumerable<SelectListItem> GetAllOptions(this FileTypes value)
        {
            var possibleValues = (FileTypes[])Enum.GetValues(typeof(FileTypes));
            var selectListItems = possibleValues.Select(ft => new SelectListItem(ft.ToString(), ((int)ft).ToString()));
            return selectListItems;
        }
    }
}
