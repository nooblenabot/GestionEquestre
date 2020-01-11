﻿
namespace GestionEquestre.Ge.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Ge.LinkFolderHorse")]
    [BasedOnRow(typeof(Entities.LinkFolderHorseRow))]
    public class LinkFolderHorseColumns
    {
       [EditLink]
        public String Horse { get; set; }
       [EditLink]
        public String HorseName { get; set; }
    }
}